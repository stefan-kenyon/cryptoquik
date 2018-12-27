import React from 'react'

import './CryptoIn.scss'

class CryptoIn extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    let textIn = document.getElementById('crypto')
    let guessBlank = textIn.value.split('')
    let guessUpper = guessBlank.map(letter => letter.toUpperCase())
    console.log(guessUpper)
    guessUpper = guessUpper.join('')
    //console.log(textIn.value);
    this.props.handleSubmit(guessUpper);
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