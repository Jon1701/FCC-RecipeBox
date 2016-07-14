var ViewRecipe = React.createClass({
  render: function() {
    return (
      <div className="recipe-view">

        <div className="title text-center">
          Architecture
        </div>

        <div className="col-2">

          <div className="ingredients">
            .ingredients
          </div>

          <div className="image">
            .image
          </div>

        </div>



      </div>
    )
  }
});

// Individual recipe.
var Recipe = React.createClass({
  render: function() {

    return (
      <div className="card">

        <div className="card-image">
          <img className="img-responsive" src={this.props.recipe.picture} />
          <span className="card-title">{this.props.recipe.name}</span>
        </div>

        <div className="card-description">
          <p>
            {this.props.recipe.description}
          </p>
        </div>

        <ViewRecipe/>

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
          'name': 'Architecture',
          'picture': 'https://placeholdit.imgix.net/~text?txtsize=80&txt=Recipe&w=1024&h=600',
          'description': 'Sunt id in ea veniam tempor consequat voluptate fugiat elit ad.',
          ingredients: ['Pumpkin Puree', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']
        },
        {
          'name': 'Spaghetti',
          'picture': 'https://placeholdit.imgix.net/~text?txtsize=80&txt=Recipe&w=1024&h=600',
          'description': 'Aute cupidatat sunt ullamco et laborum esse reprehenderit tempor.',
          ingredients: ['Noodles', 'Tomato Sauce', 'Meatballs']
        },
        {
          'name': 'Onion Pie',
          'picture': 'https://placeholdit.imgix.net/~text?txtsize=80&txt=Recipe&w=1024&h=600',
          'description': 'Proident culpa eiusmod ullamco adipisicing eu anim nulla tempor do officia.',
          ingredients: ['Onion', 'Pie Crust']
        }
      ]
    }
  },

  render: function() {

    var temp = this.state.recipes.map(function(element, index) {
      return <Recipe recipe={element} key={index}/>
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
