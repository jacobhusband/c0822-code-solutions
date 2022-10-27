import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 1
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='row content'>
          <div className='col flex-col self-center'>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className='col flex-col'>
            <Pokemon images={this.props.images} currentId={this.state.currentId}/>
            <Dots images={this.props.images} currentId={this.state.currentId}/>
          </div>
          <div className='col flex-col self-center'>
            <i className="fa-solid fa-chevron-right"></i>
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
