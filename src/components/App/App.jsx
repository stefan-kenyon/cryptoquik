import React, { Component } from 'react'
import './App.scss'

import CryptoIn from '../CryptoIn/CryptoIn'
import Play from '../Play/Play'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      guess:'',
      original:'',
      status:false,
      completed:false
    }

    this.handleOriginal = this.handleOriginal.bind(this)
    this.handleGuess = this.handleGuess.bind(this)
  }

  componentDidMount() {
    console.log('Welcome to cryptoquik')
  }

  handleOriginal(org) {
    let guessBlank = org.split('')
    let guessSpaces = guessBlank.map(letter => {
      let returned = ''
      letter = letter.toUpperCase()
      let regex = /[A-Za-z]/
      let result = letter.search(regex)
      //console.log(result);
      if(result === 0) {
        returned = '_'
      } else {
        returned = letter
      }
      return returned;
    })
    this.setState({original:org, guess:guessSpaces, status:true})
  }

  handleGuess(guess) {
    //console.log(guess);
    let tempOrg = [...this.state.original]
    let tempGuess = [...this.state.guess]
    for(let i = 0; i < tempOrg.length; i++) {
      if(tempOrg[i] === guess.target) {
        if(guess.guess === '') {
          tempGuess.splice(i, 1, '_')  
        } else {
          tempGuess.splice(i, 1, guess.guess)
        }
      } 
    }
    this.setState({guess:tempGuess})
  }

  render() {
    return (
      <div className="cqhApp">
        <h1>cryptoquik</h1>

        {
          this.state.original.length === 0 &&
          <div>
            <CryptoIn handleSubmit={this.handleOriginal}/>
          </div>
        }

        {
          this.state.original.length > 0 &&
          <div>
            <Play original={this.state.original} guess={this.state.guess} handleGuess={this.handleGuess} status={this.state.status} completed={this.state.completed}/>
          </div>
        }

        <p className='cqhInfo'>For information on cryptoquips, visit <a href='https://en.wikipedia.org/wiki/Cryptogram'>here</a>.</p>
        
      </div>
    )
  }
}

export default App;
