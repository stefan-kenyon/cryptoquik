import React from 'react'

import './CryptoIn.scss'

class CryptoIn extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    let textIn = document.getElementById('crypto')
    //console.log(textIn.value);
    this.props.handleSubmit(textIn.value);
  }

  render() {
    return (
      <div className='cqhIn'>
        <p>This little program helps you solve a cryptoquip quickly.</p>
        <textarea id='crypto'></textarea>
        <button className='cqhButton' onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
};

export default CryptoIn;