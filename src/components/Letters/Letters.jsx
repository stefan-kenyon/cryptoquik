import React from 'react'

import Letter from '../Letter/Letter'
import './Letters.scss'

export default class Letters extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  }

  render() {
    return (
      <div className='cqhLetters'>
        <h3 className='cqhH3'>Letters</h3>
        <div className='cqhLetter'>
          {
            this.state.alphabet.map(letter => {
              return <Letter key={letter} letter={letter} handleGuess={this.props.handleGuess}/>
            })
          }
        </div>
      </div>
    );
  }
}