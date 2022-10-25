import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.clicks = 1;
    this.className = 'darkest-purple';
    this.state = {
      clickCount: this.clicks,
      className: this.className
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.clicks++;
    this.setState({
      clickCount: this.clicks
    });
    if (this.clicks / 4 === 1) {
      this.setState({
        className: 'dark-purple'
      });
    } else if (this.clicks / 7 === 1) {
      this.setState({
        className: 'purple'
      });
    } else if (this.clicks / 10 === 1) {
      this.setState({
        className: 'light-red'
      });
    } else if (this.clicks / 13 === 1) {
      this.setState({
        className: 'orange'
      });
    } else if (this.clicks / 16 === 1) {
      this.setState({
        className: 'yellow'
      });
    } else if (this.clicks / 19 === 1) {
      this.setState({
        className: 'white'
      });
    }
  }

  render() {
    return (
      <button className={this.state.className} onClick={this.handleClick}>HOT BUTTON</button>
    );
  }
}
