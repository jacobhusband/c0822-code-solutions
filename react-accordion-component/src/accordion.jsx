import React from 'react';

const items = [
  {
    title: 'HTML',
    id: 1,
    description: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)."
  },
  {
    title: 'CSS',
    id: 2,
    description: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.'
  },
  {
    title: 'JavaScript',
    id: 3,
    description: "What is JavaScript? JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well."
  }
];

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      lastClicked: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.hideChildren = this.hideChildren.bind(this);
  }

  hideChildren(container) {
    const children = container.children;
    for (var i = 0; i < children.length; i++) {
      children[i].lastElementChild.classList.add('hidden');
    }
  }

  handleClick(event) {
    const container = event.target.parentElement.parentElement;
    this.hideChildren(container);
    this.setState({
      isOpen: true,
      lastClicked: event.target.parentElement.dataset.id
    });
    if (event.target.parentElement.dataset.id !== this.state.lastClicked) {
      event.target.nextElementSibling.classList.remove('hidden');
    } else {
      this.setState({
        lastClicked: ''
      });
    }

  }

  render() {
    return (
      items.map(obj =>
          <>
            <li key={obj.id} data-id={obj.id}>
              <h2 onClick={this.handleClick}>
                {obj.title}
              </h2>
              <p className='hidden'>
                {obj.description}
              </p>
            </li>
          </>
      )
    );
  }
}

export default class Accordion extends React.Component {
  render() {
    return (
      <ul>
        <ListItems/>
      </ul>
    );
  }
}
