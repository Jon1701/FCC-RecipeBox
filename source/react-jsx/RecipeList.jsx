import React from 'react';
import Recipe from './Recipe.jsx';
import uuid from 'node-uuid';
import $ from 'jquery';

// Component which contains all recipe data.
class RecipeList extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Component constructor
  //////////////////////////////////////////////////////////////////////////////
  constructor() {
    super();

    // If local storage does not have recipes stored, create an empty array
    // of recipes in the local storage.
    if (!localStorage.hasOwnProperty('recipes')) {
      localStorage.setItem('recipes', JSON.stringify([]));
    }

    // Load the recipes.
    this.state = {
      recipes: JSON.parse(localStorage.getItem('recipes'))
    };

  }

  //////////////////////////////////////////////////////////////////////////////
  // Function to handle <RecipeList/> state changes
  //
  // Arguments:
  //  id: the recipe id number
  //  key: the field name whose value is to be updated
  //  value: the updated value
  //////////////////////////////////////////////////////////////////////////////
  handleRecipeEdit(id, key, value) {

    // Get a copy of all recipes in the state.
    var recipes = this.state.recipes.slice();

    // Filter recipes and only return the recipe to be updated.
    var result = recipes.filter(function(currentValue, index, arr) {
      return currentValue.id == id;
    })[0];

    // Get the index of the recipe to be updated.
    var idx = recipes.indexOf(result);

    // Modify recipe to with updated data.
    result[key] = value;

    // Replace modified recipe into array.
    recipes[idx] = result;

    // Update state.
    this.setState({
      recipes: recipes
    });

  }

  //////////////////////////////////////////////////////////////////////////////
  // Function to handle recipe deletion.
  //////////////////////////////////////////////////////////////////////////////
  handleRecipeDelete(id) {

    // Get a copy of all recipes in the state.
    var recipes = this.state.recipes.slice();

    // Filter recipes and only return the recipe to be updated.
    var result = recipes.filter(function(currentValue, index, arr) {
      return currentValue.id == id;
    })[0];

    // Get the index of the recipe to be updated.
    var idx = recipes.indexOf(result);

    // Remove recipe at index idx.
    recipes.splice(idx, 1);

    // Update state.
    this.setState({
      recipes: recipes
    });
  }

  addRecipe() {

    // Create a blank recipe.
    var blankRecipe = {
      'id': uuid.v4(),
      'name': '',
      'picture': './media/images/placeholders/recipe-no-image.png',
      'description': '',
      'ingredients': '',
      'instructions': ''
    }

    // Add blank recipe.
    this.setState({
      recipes: this.state.recipes.concat([blankRecipe])
    });

  }

  //////////////////////////////////////////////////////////////////////////////
  // Component Lifecycle methods
  //////////////////////////////////////////////////////////////////////////////

  // Once the component state receives an update, propagate the state changes
  // to the local storage.
  componentDidUpdate() {
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
  }

  // Once the component did mount, expose functions for loading default recipes
  // or deleting all recipes.
  //
  // All these functions are mainly just for debugging or presentation purposes.
  componentDidMount() {

    console.log(`\
    Debug commands:\r\n\r\n \
    deleteRecipes() \r\n  \
    defaultRecipes() \r\n \
    `);

    // Reference to this component.
    var thisComp = this;

    // Load default recipes.
    window.defaultRecipes = function() {
      $.getJSON('../data/recipes-default.json', function(data) {
        thisComp.setState({
          recipes: data
        })
      })
    };

    // Delete all recipes.
    window.deleteRecipes = function() {
      thisComp.setState({
        recipes: []
      })
    }

    // Check to see if recipes value in the local storage is empty.
    var keyExists = localStorage.hasOwnProperty('recipes');
    var checkEmpty = JSON.parse(localStorage.getItem('recipes')).length === 0;

    // If it is empty, load default recipes.
    if (keyExists && checkEmpty) {
      window.defaultRecipes();
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Component render
  //////////////////////////////////////////////////////////////////////////////
  render() {

    // Reference to this component.
    var thisComp = this;

    return (
      <div>

        <div>
          <button
            className="button-add-recipe waves-effect waves-light btn-large"
            onClick={this.addRecipe.bind(this)}>
            <i className="fa fa-plus"></i> Add Recipe
          </button>
        </div>

        <div className="row">
          {this.state.recipes.map(function(element, index) {
            return (
              <Recipe
                recipe={element}
                key={index}
                updateRecipe={thisComp.handleRecipeEdit.bind(thisComp)}
                deleteRecipe={thisComp.handleRecipeDelete.bind(thisComp)}
              />
            )
          })}
        </div>

      </div>
    );
  }

}

export default RecipeList;
