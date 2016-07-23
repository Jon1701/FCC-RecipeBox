import React from 'react';
import Recipe from './Recipe.jsx';

// Component which contains all recipe data.
class RecipeList extends React.Component {

  constructor() {
    super();

    this.state = {
      recipes: [
        {
          'id': 0,
          'name': 'Architecture',
          'picture': '../media/images/placeholders/architecture.jpg',
          'description': 'Sunt id in ea veniam tempor consequat voluptate fugiat elit ad.',
          'ingredients': 'Mollit pariatur aute voluptate pariatur amet consectetur eu adipisicing fugiat aliquip nulla officia enim.'
        },
        {
          'id': 1,
          'name': 'Spaghetti',
          'picture': '../media/images/placeholders/spaghetti.jpg',
          'description': 'Aute cupidatat sunt ullamco et laborum esse reprehenderit tempor.',
          'ingredients': 'Tempor cillum anim occaecat et enim proident reprehenderit commodo dolore ex irure deserunt tempor Lorem labore.'
        },
        {
          'id': 2,
          'name': 'Cake',
          'picture': '../media/images/placeholders/cake.jpg',
          'description': 'Proident culpa eiusmod ullamco adipisicing eu anim nulla tempor do officia.',
          'ingredients': 'Fugiat mollit cillum aute enim laboris ut et duis excepteur ex reprehenderit.'
        }
      ]
    }
  }

  handleUserChange(id, key, value) {

    // Get a copy of recipes in state.
    var recipes = this.state.recipes.slice();

    // Filter this.state.recipes by id.
    var result = recipes.filter(function(currentValue, index, arr) {
      return currentValue.id == id;
    })[0];

    // Get index of recipe in state.
    var idx = recipes.indexOf(result);

    // Modify result to hold updated data.
    result[key] = value;

    // Replace modified recipe into array.
    recipes[idx] = result;

    // Update state.
    this.setState({
      recipes: recipes
    });

  }

  render() {

    var thisComp = this;

    return (
      <div>
        {this.state.recipes.map(function(element, index) {
          return <Recipe recipe={element} key={index} updater={thisComp.handleUserChange.bind(thisComp)}/>
        })}
      </div>
    );
  }

}

export default RecipeList;
