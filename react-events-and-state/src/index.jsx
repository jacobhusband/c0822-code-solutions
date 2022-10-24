import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {(this.state.isClicked) ? 'I am Clicked' : 'I am not Clicked'}
      </button>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton/>);
