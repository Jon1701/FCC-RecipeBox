import React from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './RecipeList.jsx';

// Top-level container which will house the list of
// recipes.
class RecipeContainer extends React.Component {
  render() {
    return (
        <RecipeList/>
    );
  }
}

ReactDOM.render(<RecipeContainer/>, document.getElementById("target"));
