import React from 'react';
import Recipe from './Recipe.jsx';

// Component which contains all recipe data.
class RecipeList extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Component constructor
  //////////////////////////////////////////////////////////////////////////////
  constructor() {
    super();

    // Default list of recipes.
    this.state = {
      recipes: [
        {
          'id': 0,
          'name': 'Architecture',
          'picture': 'data:image/png;base64,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',
          'description': 'Sunt id in ea veniam tempor consequat voluptate fugiat elit ad.',
          'ingredients': 'Mollit pariatur aute voluptate pariatur amet consectetur eu adipisicing fugiat aliquip nulla officia enim.',
          'instructions': 'Incididunt cillum duis laboris minim qui tempor quis cillum Lorem consequat nulla Lorem voluptate eiusmod minim incididunt. In consectetur laborum sunt sunt amet qui laborum mollit enim labore. Ipsum adipisicing consectetur adipisicing occaecat dolore aliquip deserunt id ipsum deserunt commodo cillum.'
        },
        {
          'id': 1,
          'name': 'Spaghetti',
          'picture': 'data:image/png;base64,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',
          'description': 'Aute cupidatat sunt ullamco et laborum esse reprehenderit tempor.',
          'ingredients': 'Tempor cillum anim occaecat et enim proident reprehenderit commodo dolore ex irure deserunt tempor Lorem labore.',
          'instructions': 'Dolore excepteur reprehenderit commodo ipsum eiusmod ut labore. Commodo nostrud amet commodo in laboris fugiat reprehenderit ad laborum sunt officia deserunt mollit id aliquip quis et. Amet dolore esse nisi elit culpa voluptate cillum fugiat. Labore quis nostrud quis sint qui dolor anim esse ex ullamco ex enim in do. Adipisicing sit anim ex cillum irure ut officia sit quis laboris deserunt proident deserunt consequat ea.'
        },
        {
          'id': 2,
          'name': 'Cake',
          'picture': 'data:image/png;base64,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',
          'description': 'Proident culpa eiusmod ullamco adipisicing eu anim nulla tempor do officia.',
          'ingredients': 'Fugiat mollit cillum aute enim laboris ut et duis excepteur ex reprehenderit.',
          'instructions': 'Ad occaecat esse incididunt aliquip proident velit reprehenderit dolor officia reprehenderit proident ad ipsum cillum tempor. Nostrud culpa amet do nulla quis in in consequat do dolore laboris elit esse. Deserunt voluptate id minim tempor consectetur aliquip consequat incididunt excepteur fugiat occaecat minim. Sint commodo laborum esse velit consequat sint laboris est officia laboris officia ullamco non minim quis laborum. Aliquip magna velit tempor tempor exercitation esse enim sit Lorem elit deserunt proident magna. Sint ullamco tempor labore anim sunt culpa irure.'
        }
      ]
    }// end default state.

  }

  //////////////////////////////////////////////////////////////////////////////
  // Function to handle <RecipeList/> state changes
  //
  // Arguments:
  //  id: the recipe id number
  //  key: the field name whose value is to be updated
  //  value: the updated value
  //////////////////////////////////////////////////////////////////////////////
  handleUserChange(id, key, value) {

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
  // Component render
  //////////////////////////////////////////////////////////////////////////////
  render() {

    // Reference to this component.
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
