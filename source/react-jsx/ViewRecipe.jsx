import React from 'react';
import ReactDOM from 'react-dom';

class ViewRecipe extends React.Component {

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
    let id = this.props.recipe.id;
    let key = "name";
    let value = event.target.value;
    this.props.updater(id, key, value);
  }
  handleUpdateDescription(event) {
    let id = this.props.recipe.id;
    let key = "description";
    let value = event.target.value;
    this.props.updater(id, key, value);
  }
  handleUpdateIngredients(event) {
    let id = this.props.recipe.id;
    let key = "ingredients";
    let value = event.target.value;
    this.props.updater(id, key, value);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Component render.
  //////////////////////////////////////////////////////////////////////////////
  render() {
    if (this.props.show) {
      return (
        <div className="card recipe-view">

          <div className="close-button" onClick={this.props.hideModal}>
            &times;
          </div>

          <div className="title">
            <input
              className="card-title"
              defaultValue={this.props.recipe.name}
              onChange={this.handleUpdateTitle.bind(this)}
              placeholder="Enter a title for this recipe"
            />
          </div>

          <div className="description">
            <input
              defaultValue={this.props.recipe.description}
              onChange={this.handleUpdateDescription.bind(this)}
              placeholder="Enter a description for this recipe"
            />
          </div>

          <div className="container row">
            <div className="ingredients col s6">
              <textarea
                defaultValue={this.props.recipe.ingredients}
                onChange={this.handleUpdateDescription.bind(this)}
                placeholder="Enter some ingredients for this recipe"
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

                <div className="col s6 m6 l6">
                  <button onClick={this.handleImageUpload.bind(this)}
                    className="waves-effect waves-light btn-large">
                    Upload Image
                  </button>
                </div>

                <div className="col s6 m6 l6">
                  <button onClick={this.handleImageRemove.bind(this)}
                    className="waves-effect waves-light btn-large red lighten-2">
                    Remove Image
                  </button>
                </div>

              </div>



            </div>
          </div>

          <div className="instructions">
            <textarea
              data-key="instructions"
              defaultValue={this.props.recipe.instructions}
              onChange={this.handleRecipeEdit.bind(this)}
              placeholder="Enter preparation instructions"
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
