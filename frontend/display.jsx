import React from 'react';
import ReactDom from 'react-dom';

class Display extends React.Component {
  render() {
    return <div>{this.props.elapsed}</div>
  }
}

export default Display

//var React = require('react'),
    //ReactDom = require('react-dom'),
    //Display = React.createClass({
      //render: function() {
        //return (
          //<div>{ this.props.elapsed }</div>
            //);
      //}
    //});

//module.exports = Display;
