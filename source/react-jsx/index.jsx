var ViewRecipe = React.createClass({

  render: function() {

    if (this.props.show) {
      return (
        <div className="recipe-view">

          <button onClick={this.props.hideModal}>Close</button>

          <div className="title text-center">
            {this.props.recipe.name}
          </div>

          <div className="ingredients col-xs-6 col-sm-6 col-md-6 col-lg-6" contentEditable="true">
            {this.props.recipe.ingredients}
          </div>

          <div className="image col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <img src={this.props.recipe.picture} className="img-responsive"/>
          </div>

        </div>
      )
    } else {
      return null;
    }

  }
});

// Individual recipe.
var Recipe = React.createClass({

  hideModal: function() {
    this.setState({
      display: false
    });
  },

  showModal: function() {
    this.setState({
      display: true
    });
  },

  getInitialState: function() {
    return {
      display: true
    }
  },

  render: function() {

    return (

    <div>

      <div className="card col-xs-6 col-sm-4 col-md-4 col-lg-4" onClick={this.showModal}>

        <div className="card-image">
          <img className="img-responsive card-image-small card-image-darken" src={this.props.recipe.picture} />
          <span className="card-title">{this.props.recipe.name}</span>
        </div>

        <div className="card-description">
          <p>
            {this.props.recipe.description}
          </p>
        </div>

      </div>

      <ViewRecipe recipe={this.props.recipe} show={this.state.display} hideModal={this.hideModal}/>

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
          'ingredients': 'Mollit pariatur aute voluptate pariatur amet consectetur eu adipisicing fugiat aliquip nulla officia enim.'
        },
        {
          'name': 'Spaghetti',
          'picture': '../media/images/placeholders/spaghetti.jpg',
          'description': 'Aute cupidatat sunt ullamco et laborum esse reprehenderit tempor.',
          'ingredients': 'Tempor cillum anim occaecat et enim proident reprehenderit commodo dolore ex irure deserunt tempor Lorem labore.'
        },
        {
          'name': 'Cake',
          'picture': '../media/images/placeholders/cake.jpg',
          'description': 'Proident culpa eiusmod ullamco adipisicing eu anim nulla tempor do officia.',
          'ingredients': 'Fugiat mollit cillum aute enim laboris ut et duis excepteur ex reprehenderit.'
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
