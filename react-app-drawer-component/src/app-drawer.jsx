import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      showingModal: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.matches('i')) {
      this.setState({
        isClicked: true,
        showingModal: true
      });
    } else if (event.target.matches('a') || event.target.matches('.modal')) {
      this.setState({
        isClicked: false
      });
      setTimeout(() => {
        this.setState({
          showingModal: false
        });
      }, 150);
    }
  }

  render() {
    let modalClassName;
    let menuModalClassName;

    if (this.state.isClicked) {
      modalClassName = 'modal darken';
      menuModalClassName = 'menu modal slide-right';
    } else {
      modalClassName = 'modal brighten';
      menuModalClassName = 'menu modal slide-left';
    }

    if (!this.state.showingModal) {
      modalClassName = 'modal hidden';
    }

    return (
      <>
        <i onClick={this.handleClick} className="fa-solid fa-bars"></i>
        <div onClick={this.handleClick} className={modalClassName}>
          <div className={menuModalClassName}>
            <h1>Menu</h1>
            <a onClick={this.handleClick} href="#">About</a>
            <a onClick={this.handleClick} href="#">Get Started</a>
            <a onClick={this.handleClick} href="#">Sign In</a>
          </div>
        </div>
      </>
    );
  }
}
