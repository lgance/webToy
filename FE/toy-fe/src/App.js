import React, { Component,Fragment } from 'react';

import Board from './test/Board';
class App extends Component {
  render() {
    return (
      <Fragment>
          <div className="game">
            <div className="game-board">
              <Board/>
            </div>

            <div className="game-info">
              <div>{/*status */} </div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default App;
