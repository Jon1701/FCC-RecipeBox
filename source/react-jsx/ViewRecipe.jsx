import React from 'react';
import ReactDOM from 'react-dom';
import ContentEditable from 'react-contenteditable';

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

    // Select the edit button for the current recipe.
    var editButton = document.querySelector(recipeViewSelector + ' .button-edit');

    // Select the Image upload and Remove buttons.
    var buttonUploadImage = document.querySelector(recipeViewSelector + ' .button-upload-image');
    var buttonRemoveImage = document.querySelector(recipeViewSelector + ' .button-remove-image');

    // Add/Remove .form-field-editable class based on editability state.
    // Change Edit button text based on editability state.
    if (this.state.disableEditing) {

      // If editing is currently disabled, want to allow editing,
      // add the .form-field-editable class.
      [...formFields].map(field => field.className = field.className + " form-field-editable ");

      // Change EDIT button to VIEW.
      editButton.innerText = 'View';

    } else {

      // If editing is currently enabled, want to disallow editing,
      // remove the .form-field-editable class.
      [...formFields].map(field => field.className = field.className.replace(/\bform\-field\-editable\b/));

      // Change EDIT button to VIEW.
      editButton.innerText = 'Edit';

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
    let updater = this.props.updater;

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
    let updater = this.props.updater;

    // Default picture.
    let defaultPicture = 'data:image/png;base64,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';

    // Set default picture.
    updater(id, 'picture', defaultPicture);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Function to <ViewRecipe/> prop changes.
  //////////////////////////////////////////////////////////////////////////////

  handleUpdateTitle(event) {
    this.props.updater(this.props.recipe.id, "name", event.target.value);
  }
  handleUpdateDescription(event) {
    this.props.updater(this.props.recipe.id, "description", event.target.value);
  }
  handleUpdateIngredients(event) {
    this.props.updater(this.props.recipe.id, "ingredients", event.target.value);
  }
  handleUpdateInstructions(event) {
    this.props.updater(this.props.recipe.id, "instructions", event.target.value);
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

  //////////////////////////////////////////////////////////////////////////////
  // Component render.
  //////////////////////////////////////////////////////////////////////////////
  render() {
    if (this.props.show) {
      return (
        <div className="card recipe-view" id={"recipe-id-" + this.props.recipe.id}>

          <div className="close-button" onClick={this.props.hideModal}>
            &times;
          </div>

          <div className="title">
            <input
              type="text"
              className="card-title form-field"
              defaultValue={this.props.recipe.name}
              onChange={this.handleUpdateTitle.bind(this)}
              placeholder="Enter a title for this recipe"
              disabled={this.state.disableEditing}
            />
          </div>

          <div className="description">
            <input
              className="form-field"
              defaultValue={this.props.recipe.description}
              type="text"
              onChange={this.handleUpdateDescription.bind(this)}
              placeholder="Enter a description for this recipe"
              disabled={this.state.disableEditing}
            />
          </div>

          <div className="container row">
            <div className="ingredients col s6">

              <h4 className="section-header">Ingredients</h4>

              <ContentEditable
                className="contentEditable-ingredients form-field"
                disabled={this.state.disableEditing}
                html={this.props.recipe.ingredients}
                onChange={this.handleUpdateIngredients.bind(this)}
                />

            </div>

            <div className="image col s6">
              <img src={this.props.recipe.picture} className="maxwidth-img"/>

              <div className="clearfix"></div>

              <input
                accept="image/*"
                type="file"
                title="load file"
                className="hidden"
                id={'recipe-file-' + this.props.recipe.id}
              />

              <div className="row btnarray-img-add-remove">

                <div className="col s8 m8 l8">
                  <button onClick={this.handleImageUpload.bind(this)}
                    className="button-upload-image waves-effect waves-light btn-large">
                    Upload Image
                  </button>
                </div>

                <div className="col s4 m4 l4">
                  <button onClick={this.handleImageRemove.bind(this)}
                    className="button-remove-image waves-effect waves-light btn-large red lighten-2">
                    Remove Image
                  </button>
                </div>

              </div>

            </div>
          </div>

          <div className="instructions">

            <h4 className="section-header">Preparation Instructions</h4>

            <ContentEditable
              className="contentEditable-instructions form-field"
              disabled={this.state.disableEditing}
              html={this.props.recipe.instructions}
              onChange={this.handleUpdateInstructions.bind(this)}
              />

          </div>

          <div className="container-btn-submit">

            <hr/>

            <button
              className="button-autosave waves-effect waves-light btn-large disabled">
              Autosave Enabled
            </button>

            {" "}

            <button
              className="button-edit waves-effect waves-light btn-large teal lighten-2"
              onClick={this.handleEditState.bind(this)}>
              Edit
            </button>

            {" "}

            <button
              className="button-delete waves-effect waves-light btn-large red lighten-2">
              Delete
            </button>
          </div>

        </div>
      )
    } else {
      return null;
    }
  }

}

export default ViewRecipe;
