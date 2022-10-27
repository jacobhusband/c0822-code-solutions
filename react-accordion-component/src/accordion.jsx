import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastClicked: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const id = event.target.parentElement.dataset.id;
    this.setState({ lastClicked: id });
    (id === this.state.lastClicked) && this.setState({ lastClicked: '' });
  }

  render() {

    const listItems = this.props.items.map(obj =>
            <li key={obj.id} data-id={obj.id}>
              <h2 onClick={this.handleClick}>
                {obj.title}
              </h2>
              { (Number(this.state.lastClicked) === obj.id) && <p>{obj.description}</p> }
            </li>
    );

    return (
      <ul>{listItems}</ul>
    );
  }
}
