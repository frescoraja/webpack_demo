import React from 'react';
import Buttons from './buttons';
import Splits from './splits';
import Display from './display';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elapsed: 0, running: false, splits: [] };
    this.tick = this.tick.bind(this);
    this.button1Clicked = this.button1Clicked.bind(this);
    this.button2Clicked = this.button2Clicked.bind(this);
  }
  tick() {
    if (this.state.running) {
      this.setState({ elapsed: this.state.elapsed + 0.01 });
    }
  }
  button1Clicked() {
    if (this.state.running) {
      let splits = this.state.splits;
      splits.push(this.state.elapsed);
      this.setState({ splits: splits });
    } else {
      this.setState({ running: true });
    }
  }
  button2Clicked() {
    if (this.state.running) {
      this.setState({ running: false });
    } else {
      this.setState({ elapsed: 0, split: [] });
    }  
  }
  componentDidMount() {
    setInterval(this.tick.bind(this), 10); 
  }
  render() {
    return (
      <div>
        <Display elapsed={ this.state.elapsed }/>
        <Buttons 
          running={ this.state.running }
          button1Callback={ this.button1Clicked }
          button2Callback={ this.button2Clicked }/>
        <Splits splits={ this.state.splits }/>
      </div>
    );
  }
}

export default Watch

//var React = require('react'),
    //Buttons = require('./buttons'),
    //Splits = require('./splits'),
    //Display = require('./display');

//var Watch = React.createClass({
  //getInitialState: function() {
    //return { elapsed: 0, running: false, splits: [] };
  //},

  //tick: function() {
    //if (this.state.running) {
      //this.setState({ elapsed: this.state.elapsed + 0.01 });
    //}
  //},

  //button1Clicked: function() {
    //if (this.state.running) {
      //var splits = this.state.splits;
      //splits.push(this.state.elapsed);
      //this.setState({ splits: splits });
    //} else {
      //this.setState({ running: true });
    //}
  //},

  //button2Clicked: function() {
    //if (this.state.running) {
      //this.setState({ running: false });
    //} else {
      //this.setState({ elapsed: 0, splits: [] });
    //}
  //},

  //componentDidMount: function() {
    //setInterval(this.tick, 10);
  //},

  //render: function() {
    //return (
      //<div>
        //<Display elapsed={ this.state.elapsed }/>
        //<Buttons 
          //running={ this.state.running }
          //button1Callback={ this.button1Clicked }
          //button2Callback={ this.button2Clicked }/>
        //<Splits splits={ this.state.splits }/>
      //</div>
    //);
  //}
//});

//module.exports = Watch;
