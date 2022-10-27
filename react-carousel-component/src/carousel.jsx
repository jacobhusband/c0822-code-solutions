import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, direction) {
    if (direction === 'right' && this.state.currentId < this.props.images.length) {
      this.setState({
        currentId: this.state.currentId + 1
      });
    } else if (direction === 'right' && this.state.currentId === this.props.images.length) {
      this.setState({
        currentId: 1
      });
    } else if (direction === 'left' && this.state.currentId > 1) {
      this.setState({
        currentId: this.state.currentId - 1
      });
    } else if (direction === 'left' && this.state.currentId === 1) {
      this.setState({
        currentId: this.props.images.length
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row content'>
          <div className='col flex-col self-center'>
            <i onClick={event => this.handleClick(event, 'left')} className="fa-solid fa-chevron-left"></i>
          </div>
          <div className='col flex-col'>
            <Pokemon images={this.props.images} currentId={this.state.currentId}/>
            <Dots images={this.props.images} currentId={this.state.currentId}/>
          </div>
          <div className='col flex-col self-center'>
            <i onClick={event => this.handleClick(event, 'right')} className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    );
  }
}

class Pokemon extends React.Component {

  render() {
    const listItems = this.props.images.map(obj => {
      const item = (
        <li key={obj.id}>
          <img src={obj.url} alt={obj.name} />
        </li>
      );
      if (Number(item.key) === this.props.currentId) {
        return item;
      }
      return null;
    });

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

class Dots extends React.Component {

  render() {
    const listItems = this.props.images.map(image => {
      let item;
      if (Number(image.id) === this.props.currentId) {
        item = <li key={image.id} className='dot dark-bg'></li>;
      } else {
        item = <li key={image.id} className='dot'></li>;
      }
      return item;
    });

    return (
      <ul className="dots self-center">
        {listItems}
      </ul>
    );
  }
}
