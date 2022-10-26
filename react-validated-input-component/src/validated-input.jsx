import React from 'react';

export default class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      containsDigit: false,
      containsCapital: false,
      containsSpecialChar: false
    };
    this.checkLength = this.checkLength.bind(this);
    this.checkDigit = this.checkDigit.bind(this);
    this.checkCapital = this.checkCapital.bind(this);
    this.checkSpecialChar = this.checkSpecialChar.bind(this);
  }

  checkSpecialChar(event) {
    const specialChars = /[!@#$%^&*()]/;
    if (specialChars.test(event.target.value)) {
      this.setState({
        containsSpecialChar: true
      });
    } else {
      this.setState({
        containsSpecialChar: false
      });
    }
  }

  checkCapital(event) {
    const capitals = /[A-Z]/;
    if (capitals.test(event.target.value)) {
      this.setState({
        containsCapital: true
      });
    } else {
      this.setState({
        containsCapital: false
      });
    }
  }

  checkDigit(event) {
    const digits = /[0-9]/;
    if (digits.test(event.target.value)) {
      this.setState({
        containsDigit: true
      });
    } else {
      this.setState({
        containsDigit: false
      });
    }
  }

  checkLength(event) {
    this.setState({
      length: event.target.value.length
    });
  }

  render() {
    let checkOrX;
    let invalidText;

    if (this.state.length >= 8 &&
        this.state.containsCapital &&
        this.state.containsDigit &&
        this.state.containsSpecialChar) {
      checkOrX = <i className="green fa fa-check" aria-hidden="true"></i>;
    } else {
      checkOrX = <i className="red fa fa-times" aria-hidden="true"></i>;
    }

    if (!this.state.length) {
      invalidText = 'A password is required.';
    } else if (this.state.length < 8) {
      invalidText = 'Your password is too short.';
    } else if (this.state.length >= 8 &&
              !this.state.containsDigit) {
      invalidText = 'Must contain a digit.';
    } else if (this.state.length >= 8 &&
              !this.state.containsCapital) {
      invalidText = 'Must contain a capital.';
    } else if (this.state.length >= 8 &&
              !this.state.containsSpecialChar) {
      invalidText = 'Must contain a special char.';
    } else if (this.state.length >= 8) {
      invalidText = '';
    }

    return (
      <form>
        <label htmlFor="password">Password
          <div>
            <input onInput={event => { this.checkLength(event); this.checkDigit(event); this.checkCapital(event); this.checkSpecialChar(event); }} type="password" />
            {checkOrX}
          </div>
        </label>
        <p className='red'>{invalidText}</p>
      </form>
    );
  }
}
