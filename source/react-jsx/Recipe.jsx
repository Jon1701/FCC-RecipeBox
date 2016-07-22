
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
