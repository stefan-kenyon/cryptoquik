import React from 'react'

import './Play.scss'

import Clock from '../Clock/Clock'
import Letters from '../Letters/Letters'

export default class Play extends React.Component {
  render() {
    return (
      <div className='cqhPlay'>
        <p>O = {this.props.original}</p>
        <p>G = {this.props.guess}</p>
        {/* <button className='cqhButton' id='cqhSolved'>Solved</button> */}
        {/* {
          this.props.status === true &&
          <Clock />
        } */}
        <Letters handleGuess={this.props.handleGuess}/>
      </div>
    );
  }
}