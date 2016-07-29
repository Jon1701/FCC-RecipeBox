import React from 'react';
import ReactDOM from 'react-dom';
import ContentEditable from 'react-contenteditable';
import ImageUploader from './ImageUploader.jsx';
import SaveEditDeleteButtons from './SaveEditDeleteButtons.jsx'

import classNames from 'classnames';

class ViewRecipe extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Function to handle edit state.
  //  This function toggles editability. If the current state is DISABLED, it
  //  will be set to ENABLED, and the DOM will be manipulated to show enabled
  //  styles.
  //
  //////////////////////////////////////////////////////////////////////////////
  handleEditState() {

    // Get the Recipe ViewID DOM Selector.
    var recipeViewSelector = '#recipe-id-' + this.props.recipe.id;

    // Select all .form-field for the current recipe.
    var formFields = document.querySelectorAll(recipeViewSelector + ' .form-field');

    // Add/Remove .form-field-editable class based on editability state.
    // Change Edit button text based on editability state.
    if (this.state.disableEditing) {

      // If editing is currently disabled, want to allow editing,
      // add the .form-field-editable class.
      [...formFields].map(field => field.className = field.className + " form-field-editable ");

    } else {

      // If editing is currently enabled, want to disallow editing,
      // remove the .form-field-editable class.
      [...formFields].map(field => field.className = field.className.replace(/\bform\-field\-editable\b/));

    }

    // Toggle editability state.
    this.setState({
      disableEditing: !this.state.disableEditing
    })


  }

  //////////////////////////////////////////////////////////////////////////////
  // Function to handle image uploads.
  //////////////////////////////////////////////////////////////////////////////
  handleImageUpload() {

    // Get the id of the current recipe.
    let id = this.props.recipe.id;

    // Get access to the parent state updater function.
    let updater = this.props.updateRecipe;

    // Get the file input control and trigger a click.
    let fileInput = document.getElementById('recipe-file-' + id);
    fileInput.click();

    // When the file input changes (upload), load the file.
    fileInput.onchange = function() {

      // Get the file.
      let file = fileInput.files[0];

      // FileReader
      var reader = new FileReader();

      // Attach and event listener to the FileReader object.
      // When a new file is detected, update parent state.
      reader.addEventListener('load', function() {
        updater(id, 'picture', reader.result)
      }, false);

      // Read the chosen file.
      reader.readAsDataURL(file);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Function to handle image removal.
  //////////////////////////////////////////////////////////////////////////////
  handleImageRemove() {

    // Get the id of the current recipe.
    let id = this.props.recipe.id;

    // Get access to the parent state updater function.
    let updater = this.props.updateRecipe;

    // Default picture.
    let defaultPicture = '../media/images/placeholders/recipe-no-image.png';

    // Set default picture.
    updater(id, 'picture', defaultPicture);
  }

  handleDelete() {
    let deleteRecipe = this.props.deleteRecipe;
    this.props.hideModal();
    deleteRecipe(this.props.recipe.id);
  }


  //////////////////////////////////////////////////////////////////////////////
  // Function to <ViewRecipe/> prop changes.
  //////////////////////////////////////////////////////////////////////////////

  handleUpdateTitle(event) {
    this.props.updateRecipe(this.props.recipe.id, "name", event.target.value);
  }
  handleUpdateDescription(event) {
    this.props.updateRecipe(this.props.recipe.id, "description", event.target.value);
  }
  handleUpdateIngredients(event) {
    this.props.updateRecipe(this.props.recipe.id, "ingredients", event.target.value);
  }
  handleUpdateInstructions(event) {
    this.props.updateRecipe(this.props.recipe.id, "instructions", event.target.value);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Constructor.
  //////////////////////////////////////////////////////////////////////////////
  constructor() {
    super();

    // By default do not allow editing of this components text fields.
    this.state = {
      disableEditing: true
    }
  }

  handleClose() {

    // Toggle editability state.
    this.setState({
      disableEditing: true
    })

    // Hide the view.
    this.props.hideModal();

  }

  //////////////////////////////////////////////////////////////////////////////
  // Component render.
  //////////////////////////////////////////////////////////////////////////////
  render() {
    if (this.props.show) {

      return (

        <div className="card recipe-view" id={"recipe-id-" + this.props.recipe.id}>

          <div className="button-close" onClick={this.handleClose.bind(this)}>
            &times;
          </div>

          <ContentEditable
            className="recipe-title contentEditable-name form-field"
            disabled={this.state.disableEditing}
            html={this.props.recipe.name}
            onChange={this.handleUpdateTitle.bind(this)}
          />

          <ContentEditable
            className="recipe-description contentEditable-description form-field"
            disabled={this.state.disableEditing}
            html={this.props.recipe.description}
            onChange={this.handleUpdateDescription.bind(this)}
          />

          <div className="container-ingredients-image row">

            <div className="container-recipe-ingredients col s12 m6">

              <h4 className="section-header">Ingredients</h4>

              <ContentEditable
                className="recipe-ingredients contentEditable-ingredients form-field"
                disabled={this.state.disableEditing}
                html={this.props.recipe.ingredients}
                onChange={this.handleUpdateIngredients.bind(this)}
                />

            </div>

            <div className="container-recipe-image col s12 m6">
              <img src={this.props.recipe.picture} className="img-constraints"/>

              <div className="clearfix"></div>

              <ImageUploader
                id={this.props.recipe.id}
                uploadHandler={this.handleImageUpload.bind(this)}
                removeHandler={this.handleImageRemove.bind(this)}
                disableEditing={this.state.disableEditing}
              />
            </div>
          </div>

          <div className="container-recipe-instructions">

            <h4 className="section-header">Preparation Instructions</h4>

            <ContentEditable
              className="recipe-instructions contentEditable-instructions form-field"
              disabled={this.state.disableEditing}
              html={this.props.recipe.instructions}
              onChange={this.handleUpdateInstructions.bind(this)}
              />

          </div>

          <hr/>

          <div className="container-btn-submit">

            <SaveEditDeleteButtons
              disabled={this.state.disableEditing}
              RecipeViewEditState={this.handleEditState.bind(this)}
              deleteRecipe={this.handleDelete.bind(this)}
            />

          </div>

        </div>

      )
    } else {
      return null;
    }
  }

}

export default ViewRecipe;
