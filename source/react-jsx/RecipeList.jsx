


// Component which contains all recipe data.
var RecipeList = React.createClass({

  updateRecipe: function(id) {

  },

  // Default recipes.
  getInitialState: function() {
    return {
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
  },

  render: function() {

    var objThis = this;

    return (
      <div>
        {this.state.recipes.map(function(element, index) {
          return <Recipe recipe={element} updater={objThis.updateRecipe} key={index}/>
        })}
      </div>
    );
  }
});
