import React from 'react';
import ReactDOM from 'react-dom';

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
