var ViewRecipe = React.createClass({
  render: function() {
    return (
      <div className="recipe-view">

        <div className="title text-center">
          {this.props.recipe.name}
        </div>

        <div className="ingredients col-xs-6 col-sm-6 col-md-6 col-lg-6">
          {this.props.recipe.ingredients}
        </div>

        <div className="image col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <img src={this.props.recipe.picture} className="img-responsive"/>
        </div>

      </div>
    )
  }
});

// Individual recipe.
var Recipe = React.createClass({
  render: function() {

    return (

      <div className="card col-xs-4 col-sm-4 col-md-4 col-lg-4">

        <div className="card-image">
          <img className="img-responsive" src={this.props.recipe.picture} />
          <span className="card-title">{this.props.recipe.name}</span>
        </div>

        <div className="card-description">
          <p>
            {this.props.recipe.description}
          </p>
        </div>

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
          'picture': '../media/images/placeholders/architecture.jpg',
          'description': 'Sunt id in ea veniam tempor consequat voluptate fugiat elit ad.',
          'ingredients': 'In in fugiat fugiat dolor commodo dolor sint. Sit ad ullamco ullamco qui in aute consectetur eu veniam est et irure adipisicing mollit occaecat. Exercitation excepteur eiusmod quis elit esse eiusmod laborum do sit fugiat nulla labore amet ut nostrud culpa enim. Qui amet sit ad laboris occaecat consectetur adipisicing. Do sunt esse id tempor aute ut duis proident eiusmod pariatur do sint Lorem. Fugiat Lorem veniam pariatur anim sit commodo exercitation ea ex mollit ut qui excepteur nisi excepteur adipisicing. Dolor sint enim excepteur incididunt id pariatur veniam incididunt. Incididunt irure fugiat in excepteur ut excepteur dolor.'
        },
        {
          'name': 'Spaghetti',
          'picture': '../media/images/placeholders/spaghetti.jpg',
          'description': 'Aute cupidatat sunt ullamco et laborum esse reprehenderit tempor.',
          'ingredients': 'Veniam ea est amet sit eu reprehenderit magna ipsum eu. Nulla fugiat consectetur Lorem nostrud adipisicing pariatur aliqua quis quis sit aute. Aliquip labore excepteur velit quis exercitation id nisi fugiat proident duis ex aliquip.'
        },
        {
          'name': 'Cake',
          'picture': '../media/images/placeholders/cake.jpg',
          'description': 'Proident culpa eiusmod ullamco adipisicing eu anim nulla tempor do officia.',
          'ingredients': 'Elit eu pariatur amet ut sit dolor veniam ut enim nostrud anim occaecat proident aute aliquip occaecat. Eiusmod sit dolore Lorem consequat cupidatat officia amet ea ex tempor sunt veniam. Enim dolore eiusmod dolore quis Lorem duis qui amet ipsum. Adipisicing occaecat occaecat ut eiusmod dolore elit dolor mollit incididunt. Pariatur mollit reprehenderit exercitation proident est voluptate elit sint culpa cupidatat et. Est minim amet duis ea nostrud voluptate veniam ex occaecat occaecat ex cupidatat commodo dolor. Eu esse et id esse voluptate cupidatat consectetur est voluptate et sunt eiusmod cupidatat et id et.'
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
        <RecipeList/>
    );
  }
});

ReactDOM.render(<RecipeContainer/>, document.getElementById("target"));
