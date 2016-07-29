import React from 'react';
import Recipe from './Recipe.jsx';
import uuid from 'node-uuid';

// Component which contains all recipe data.
class RecipeList extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Component constructor
  //////////////////////////////////////////////////////////////////////////////
  constructor() {
    super();

    // Check to see if local storage does not have recipes stored.
    if (!localStorage.hasOwnProperty('recipes')) {

      // If it does not, create an empty array of recipes in the local storage.
      localStorage.setItem('recipes', JSON.stringify([]));

    }

    // Load the recipes
    this.state = {
      recipes: JSON.parse(localStorage.getItem('recipes'))
    };

  }

  componentDidUpdate() {
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
  }

  componentDidMount() {

    console.log(`\
    Debug commands:\r\n\r\n \
    deleteRecipes() \r\n  \
    defaultRecipes() \r\n \
    `);

    var thisComp = this;

    window.defaultRecipes = function() {
      $.getJSON('../data/recipes-default.json', function(data) {
        thisComp.setState({
          recipes: data
        })
      })
    };

    window.deleteRecipes = function() {
      thisComp.setState({
        recipes: []
      })
    }
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
      'picture': '../media/images/placeholders/recipe-no-image.png',
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
