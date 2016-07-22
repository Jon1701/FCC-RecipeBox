
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
