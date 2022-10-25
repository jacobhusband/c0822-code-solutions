import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    let className;
    if (this.state.clickCount < 3) {
      className = 'darkest-purple';
    } else if (this.state.clickCount < 6) {
      className = 'dark-purple';
    } else if (this.state.clickCount < 9) {
      className = 'purple';
    } else if (this.state.clickCount < 12) {
      className = 'light-red';
    } else if (this.state.clickCount < 15) {
      className = 'orange';
    } else if (this.state.clickCount < 18) {
      className = 'yellow';
    } else {
      className = 'white';
    }

    return (
      <button className={className} onClick={this.handleClick}>HOT BUTTON</button>
    );
  }
}
