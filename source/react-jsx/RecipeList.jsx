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
          'picture': '../media/images/placeholders/recipe-image.png',
          'description': 'Sunt id in ea veniam tempor consequat voluptate fugiat elit ad.',
          'ingredients': 'Mollit pariatur aute voluptate pariatur amet consectetur eu adipisicing fugiat aliquip nulla officia enim.',
          'instructions': 'Incididunt cillum duis laboris minim qui tempor quis cillum Lorem consequat nulla Lorem voluptate eiusmod minim incididunt. In consectetur laborum sunt sunt amet qui laborum mollit enim labore. Ipsum adipisicing consectetur adipisicing occaecat dolore aliquip deserunt id ipsum deserunt commodo cillum.'
        },
        {
          'id': 1,
          'name': 'Spaghetti',
          'picture': '../media/images/placeholders/recipe-image.png',
          'description': 'Aute cupidatat sunt ullamco et laborum esse reprehenderit tempor.',
          'ingredients': 'Tempor cillum anim occaecat et enim proident reprehenderit commodo dolore ex irure deserunt tempor Lorem labore.',
          'instructions': 'Dolore excepteur reprehenderit commodo ipsum eiusmod ut labore. Commodo nostrud amet commodo in laboris fugiat reprehenderit ad laborum sunt officia deserunt mollit id aliquip quis et. Amet dolore esse nisi elit culpa voluptate cillum fugiat. Labore quis nostrud quis sint qui dolor anim esse ex ullamco ex enim in do. Adipisicing sit anim ex cillum irure ut officia sit quis laboris deserunt proident deserunt consequat ea.'
        },
        {
          'id': 2,
          'name': 'Cake',
          'picture': '../media/images/placeholders/recipe-image.png',
          'description': 'Proident culpa eiusmod ullamco adipisicing eu anim nulla tempor do officia.',
          'ingredients': 'Fugiat mollit cillum aute enim laboris ut et duis excepteur ex reprehenderit.',
          'instructions': 'Ad occaecat esse incididunt aliquip proident velit reprehenderit dolor officia reprehenderit proident ad ipsum cillum tempor. Nostrud culpa amet do nulla quis in in consequat do dolore laboris elit esse. Deserunt voluptate id minim tempor consectetur aliquip consequat incididunt excepteur fugiat occaecat minim. Sint commodo laborum esse velit consequat sint laboris est officia laboris officia ullamco non minim quis laborum. Aliquip magna velit tempor tempor exercitation esse enim sit Lorem elit deserunt proident magna. Sint ullamco tempor labore anim sunt culpa irure.'
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
