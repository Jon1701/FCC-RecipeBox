import React from 'react';
import ReactDOM from 'react-dom';

class ViewRecipe extends React.Component {

  handleChange(event) {

    let id = this.props.recipe.id;
    let key = event.target.getAttribute('data-key');
    let value = event.target.value;

    this.props.updater(id, key, value);
  }

  render() {
    if (this.props.show) {
      return (
        <div className="recipe-view">

          <button onClick={this.props.hideModal}>Close</button>

          <input
            className="title text-center"
            data-key="name"
            defaultValue={this.props.recipe.name}
            onChange={this.handleChange.bind(this)}
          />

          <textarea
            className="ingredients col-xs-6 col-sm-6 col-md-6 col-lg-6"
            data-key="ingredients"
            defaultValue={this.props.recipe.ingredients}
            onChange={this.handleChange.bind(this)}
          />



          <div className="image col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <img src={this.props.recipe.picture} className="img-responsive"/>
          </div>

        </div>
      )
    } else {
      return null;
    }
  }

}

export default ViewRecipe;
