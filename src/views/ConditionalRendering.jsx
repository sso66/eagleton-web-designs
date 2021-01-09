import React from 'react';

export class Results extends React.Component {

    render() {
      const { fiftyFifty } = this.props;
      return (
        <div>
        <h1>
        {
          /* change code here */
            fiftyFifty ? <button>"You win!"</button> : alert("you lose!")
        }
        </h1>
        <p>Hazmat Codes</p>
        </div>
      )
    };
  };
  
export  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        counter: this.state.counter + 1 // change code here
      });
    }
    render() {
      let expression = Math.random() > .5; // change code here
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          { /* change code below this line */ }
          <Results fiftyFifty={expression} />
          { /* change code above this line */ }
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  };