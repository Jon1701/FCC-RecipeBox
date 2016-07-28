import React from 'react';

class DeleteConfirmation extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div id="modal1" class="modal">
        <div className="modal-content">
          <h4>Delete Recipe?</h4>
          <p>Are you sure you want to delete this recipe?</p>
        </div>
        <div className="modal-footer">
          <button data-target="modal1" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</button>
        </div>
      </div>
    );
  }

}

export default DeleteConfirmation;
