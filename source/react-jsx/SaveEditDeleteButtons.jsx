import React from 'react';
import classNames from 'classnames';

class SaveEditDeleteButtons extends React.Component {
  constructor() {
    super();
  }

  render() {

    var classesButtonViewEdit = classNames({
      "waves-effect waves-light btn-large teal lighten-2": true,
      "button-view": this.props.disabled === false,
      "button-edit": this.props.disabled === true,
    });

    var classesButtonViewEditIcons = classNames({
      "fa fa-eye": this.props.disabled === false,
      "fa fa-pencil-square-o": this.props.disabled === true
    })

    return (
      <div>
        <button
          className="button-autosave waves-effect waves-light btn-large disabled">
          <i className="fa fa-spinner"></i> Autosave
        </button>

        {" "}

        <button
          className={classesButtonViewEdit}
          onClick={this.props.RecipeViewEditState}>
          <i className={classesButtonViewEditIcons}></i>{" "}
        </button>

        {" "}

        <button
          className="button-delete waves-effect waves-light btn-large red lighten-2"
          onClick={this.props.deleteRecipe}>
          <i className="fa fa-trash-o"></i> Delete
        </button>
      </div>
    )
  }
}

export default SaveEditDeleteButtons;
