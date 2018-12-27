import React from 'react'

import './Clock.scss'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time:0
    }

    this.handleStart = this.handleStart.bind(this)
  }

  componentDidMount() {
    this.handleStart();
  }

  componentDidUpdate() {
    if(this.props.completed === true) {
      clearInterval(this.timer);
      let timer = document.getElementById('cqhTime');
      timer.style.display = 'flex';
    }
  }

  handleStart() {
    this.timer = setInterval(() => this.setState({
      time: this.state.time + 1
    }), 1000)
    console.log(this.state.time)
  }

  render() {
    return (
      <div id='cqhTime'>
        {this.state.time}
      </div>
    );
  }
}