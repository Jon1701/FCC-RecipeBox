import React from 'react';
import ViewRecipe from './ViewRecipe.jsx';

class Recipe extends React.Component {

  constructor() {
    super();

    this.state = {
      display: true
    }
  }

  hideModal() {
    this.setState({
      display: false
    });
  }

  showModal() {
    this.setState({
      display: true
    });
  }

  render() {
    return (
      <div>

        <div className="card col-xs-6 col-sm-4 col-md-4 col-lg-4" onClick={this.showModal.bind(this)}>

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

        <ViewRecipe recipe={this.props.recipe} show={this.state.display} hideModal={this.hideModal.bind(this)}/>

      </div>
    );
  }
}

export default Recipe;
