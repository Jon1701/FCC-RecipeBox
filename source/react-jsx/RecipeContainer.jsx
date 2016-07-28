import React from 'react';
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

export default RecipeContainer;
