import React from 'react';

class ImageUploader extends React.Component {

  constructor() {
    super();
  }

  render() {
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
            <button onClick={this.props.uploadHandler}
              className="button-upload-image waves-effect waves-light btn-large">
              Upload Image
            </button>
          </div>

          <div className="col s4 m4 l4">
            <button onClick={this.props.removeHandler}
              className="button-remove-image waves-effect waves-light btn-large red lighten-2">
              Remove Image
            </button>
          </div>

        </div>

      </div>
    )
  }
}

export default ImageUploader;
