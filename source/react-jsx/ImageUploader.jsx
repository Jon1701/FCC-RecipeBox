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
      <div>

        <input
          accept="image/*"
          type="file"
          title="load file"
          className="hidden"
          id={'recipe-file-' + this.props.id}
        />

        <div className="row btnarray-img-add-remove">

          <div className="col s8 m8 l8">
            <button
              onClick={this.props.uploadHandler}
              className={classesButtonUploadImage}>
              Upload Image
            </button>
          </div>

          <div className="col s4 m4 l4">
            <button
              onClick={this.props.removeHandler}
              className={classesButtonRemoveImage}>
              Remove Image
            </button>
          </div>

        </div>

      </div>
    )
  }
}

export default ImageUploader;
