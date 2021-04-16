import React, { Component } from 'react';

class Food extends Component {
  render() {
    return (
      <div className="App">
        <h1>Favorite Food Page</h1>
        <p>Here is some info about my favorite food!</p>
        <img src="http://s3.amazonaws.com/etntmedia/media/images/ext/842849976/greasy-fast-food.jpg"/>
      </div>
    );
  }
}

export default Food;
