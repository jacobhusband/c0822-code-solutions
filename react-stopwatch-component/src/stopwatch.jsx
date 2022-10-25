import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false
    };
    this.turnOnOff = this.turnOnOff.bind(this);
    this.reset = this.reset.bind(this);
    this.intervalId = 0;
  }

  turnOnOff() {
    if (this.state.isOn) {
      this.setState({
        isOn: false
      });
      clearInterval(this.intervalId);
    } else {
      this.setState({
        isOn: true
      });
      this.intervalId = setInterval(() => {
        this.setState({
          time: this.state.time + 1
        });
      }, 1000);
    }
  }

  reset() {
    if (!this.state.isOn) {
      this.setState({
        time: 0
      });
    }
  }

  render() {
    let button;
    if (this.state.isOn) {
      button = <i onClick={this.turnOnOff} className="icon fa-solid fa-pause"></i>;
    } else {
      button = <i onClick={this.turnOnOff} className="icon fa-solid fa-play"></i>;
    }

    return (
      <>
        <div onClick={this.reset} className='stopwatch container'>
        <p onClick={this.reset} className='number'>{this.state.time}</p>
        </div>
        {button}
      </>
    );
  }
}
