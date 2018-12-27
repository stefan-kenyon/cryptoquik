import React from 'react'

import './Letter.scss'

export default class Letter extends React.Component {
  constructor(props) {
    super(props)

    this.inputGuess = this.inputGuess.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.letter === this.props.letter) {
      return false
    }

    return true
  }

  inputGuess(e) {
    let guess = e.target.value.toUpperCase()
    let guessObject = {
      target:this.props.letter,
      guess
    }
    this.props.handleGuess(guessObject)
  }

  render() {
    return (
      <div className='cqhEntry'>
        {this.props.letter} = <input className='cqhInput' maxLength='1' onChange={this.inputGuess.bind(this)}/>
      </div>
      
    );
  }
}