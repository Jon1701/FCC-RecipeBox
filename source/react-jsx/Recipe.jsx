import React from 'react';
import ViewRecipe from './ViewRecipe.jsx';

class Recipe extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Component constructor.
  //////////////////////////////////////////////////////////////////////////////
  constructor() {
    super();

    // Default state of hidden.
    // The <Recipe/> component keeps track of whether the child <ViewRecipe/>
    // component is hidden or not.
    this.state = {
      display: false
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Function to hide the <VieWRecipe/> component.
  //////////////////////////////////////////////////////////////////////////////
  hideModal() {
    this.setState({
      display: false
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Function to show the <ViewRecipe/> component.
  //////////////////////////////////////////////////////////////////////////////
  showModal() {
    this.setState({
      display: true
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Rendered component view.
  //////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div>

        <div className="col s4" onClick={this.showModal.bind(this)}>
          <div className="card hoverable recipe">
            <div className="card-image">
              <img src={this.props.recipe.picture}/>
              <span className="card-title truncate">{this.props.recipe.name}</span>
            </div>
            <div className="card-content">
              <p className="truncate">{this.props.recipe.description}</p>
            </div>
          </div>
        </div>

        <ViewRecipe
          recipe={this.props.recipe}
          show={this.state.display}
          hideModal={this.hideModal.bind(this)}
          updater={this.props.updater}
        />

      </div>
    );
  }
}

export default Recipe;
