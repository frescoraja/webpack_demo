import React from 'react';

class Buttons extends React.Component {
  render() {
    let btn1Text, btn2Text;
    if (this.props.running) {
      btn1Text = "Split";
      btn2Text = "Stop";
    } else {
      btn1Text = "Start";
      btn2Text = "Reset";
    }
    return (
      <div>
        <button onClick={this.props.button1Callback}>{btn1Text}</button>
        <button onClick={this.props.button2Callback}>{btn2Text}</button>
      </div>
    )
  }
}

export default Buttons

//var React = require('react'),

    //Buttons = React.createClass({
      //render: function() {
        //var btn1Text, btn2Text;
        //if (this.props.running) {
          //btn1Text = "Split";
          //btn2Text = "Stop";
        //} else {
          //btn1Text = "Start";
          //btn2Text = "Reset";
        //}
        //return(
          //<div>
            //<button onClick={this.props.button1Callback}>{ btn1Text }</button>
            //<button onClick={this.props.button2Callback}>{ btn2Text }</button>
          //</div>
            //);
      //}
    //});

//module.exports = Buttons;
