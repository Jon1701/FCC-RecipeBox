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
    //
    // When set to true, all recipe views will be open.
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

        <div className="col s12 m6 l4 noselect cursor-hand" onClick={this.showModal.bind(this)}>
          <div className="hoverable recipe">
            <div className="recipe-image">
              <img src={this.props.recipe.picture}/>

              <div className="recipe-title">
                <p className="truncate">{this.props.recipe.name}</p>
              </div>
            </div>
            <div className="recipe-description">
              <p className="truncate">{this.props.recipe.description}</p>
            </div>
          </div>
        </div>

        <ViewRecipe
          recipe={this.props.recipe}
          show={this.state.display}
          hideModal={this.hideModal.bind(this)}
          updateRecipe={this.props.updateRecipe}
          deleteRecipe={this.props.deleteRecipe}
        />

      </div>
    );
  }
}

export default Recipe;
