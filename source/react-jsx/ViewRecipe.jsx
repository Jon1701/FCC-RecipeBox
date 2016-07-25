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
  // Function to <ViewRecipe/> prop changes.
  //////////////////////////////////////////////////////////////////////////////
  handleRecipeEdit(event) {

    let id = this.props.recipe.id;
    let key = event.target.getAttribute('data-key');
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
              data-key="name"
              defaultValue={this.props.recipe.name}
              onChange={this.handleRecipeEdit.bind(this)}
              placeholder="Enter a title for this recipe"
            />
          </div>

          <div className="description">
            <input
              data-key="description"
              defaultValue={this.props.recipe.description}
              onChange={this.handleRecipeEdit.bind(this)}
              placeholder="Enter a description for this recipe"
            />
          </div>

          <div className="container">
            <div className="ingredients col s6">
              <textarea
                data-key="ingredients"
                defaultValue={this.props.recipe.ingredients}
                onChange={this.handleRecipeEdit.bind(this)}
                placeholder="Enter some ingredients for this recipe"
              />
            </div>

            <div className="image col s6">
              <img src={this.props.recipe.picture} className="responsive-img"/>

              <input
                accept="image/*"
                type="file"
                title="load file"
                className="hidden"
                id={'recipe-file-' + this.props.recipe.id}
              />

              <button
                onClick={this.handleImageUpload.bind(this)}
                className="btn-default img-responsive">
                Upload image
              </button>

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
