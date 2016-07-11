
var Recipe = React.createClass({
  render: function() {

    return (
      <div className="recipe">
        <div className="name">{this.props.recipe.name}</div>
        <div className="picture"><img src={this.props.recipe.picture} className="img-responsive"/></div>
        <div className="details"><button>Open Recipe</button></div>
      </div>
    );
  }
});


// Component which contains all recipe data.
var RecipeList = React.createClass({

  // Default recipes.
  getInitialState: function() {
    return {
      recipes: [
        {
          'name': 'Pumpkin Pie',
          'picture': 'https://placeholdit.imgix.net/~text?txtsize=80&txt=Recipe&w=1024&h=600',
          ingredients: ['Pumpkin Puree', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']
        },
        {
          'name': 'Spaghetti',
          'picture': 'https://placeholdit.imgix.net/~text?txtsize=80&txt=Recipe&w=1024&h=600',
          ingredients: ['Noodles', 'Tomato Sauce', 'Meatballs']
        },
        {
          'name': 'Onion Pie',
          'picture': 'https://placeholdit.imgix.net/~text?txtsize=80&txt=Recipe&w=1024&h=600',
          ingredients: ['Onion', 'Pie Crust']
        }
      ]
    }
  },

  render: function() {

    var temp = this.state.recipes.map(function(element) {
      return <Recipe recipe={element}/>
    })

    return (
      <div>
        {temp}
      </div>
    );
  }
});


// Top-level container which will house the list of
// recipes.
var RecipeContainer = React.createClass({
  render: function() {
    return (
      <div className="container" id="recipe-box">
        <RecipeList/>
      </div>
    );
  }
});

ReactDOM.render(<RecipeContainer/>, document.getElementById("target"));
