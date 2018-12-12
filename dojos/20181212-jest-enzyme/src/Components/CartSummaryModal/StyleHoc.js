import React, { Component } from 'react';

const StyleHoc = (WrappedComponent, className) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  return class extends Component {
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} customStyles={customStyles} />
        </div>
      )
    }
  }
}

export default StyleHoc;
