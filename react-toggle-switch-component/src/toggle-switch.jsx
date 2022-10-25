import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    (!this.state.isOn)
      ? this.setState({
        isOn: true
      })
      : this.setState({
        isOn: false
      });
  }

  render() {
    let containerClassName = 'switch container bg-grey';
    let className = 'toggle';
    if (this.state.isOn) {
      containerClassName = 'switch container bg-green';
      className = 'toggle shifted';
    }

    return (
      <div onClick={this.handleClick} className={containerClassName}>
        <div onClick={this.handleClick} className={className}></div>
      </div>
    );
  }
}
