import React from 'react';
import classNames from 'classnames';

class ImageUploader extends React.Component {

  constructor() {
    super();
  }

  render() {

    var classesButtonUploadImage = classNames({
      'button-upload-image': true,
      'waves-effect': true,
      'waves-light': true,
      'btn-large': true,
      'invisible': this.props.disableEditing
    });

    var classesButtonRemoveImage = classNames({
      'button-remove-image': true,
      'waves-effect': true,
      'waves-light': true,
      'btn-large': true,
      'red': true,
      'lighten-2': true,
      'invisible': this.props.disableEditing
    });

    return (
      <div className="container-imageuploader">

        <input
          accept="image/*"
          type="file"
          title="load file"
          className="hidden"
          id={'recipe-file-' + this.props.id}
        />

        <div className="row button-array">

          <div className="col s6 m6 l6">
            <button
              onClick={this.props.uploadHandler}
              className={classesButtonUploadImage}>
              <i className="fa fa-upload"></i> Upload
            </button>
          </div>

          <div className="col s6 m6 l6">
            <button
              onClick={this.props.removeHandler}
              className={classesButtonRemoveImage}>
              <i className="fa fa-times"></i> Remove
            </button>
          </div>

        </div>

      </div>
    )
  }
}

export default ImageUploader;
