import React from 'react';

export class Splits extends React.Component {
  render() {
    return (
        <ul>
          {
            this.props.splits.map( (split, idx) => {
              return <li key={idx}>{split}</li>
            })
          }
        </ul>
    )
  }
}

export default Splits

//var React = require('react');

//var Splits = React.createClass({
  //render: function() {
    //return (
        //<ul>
          //{
            //this.props.splits.map(function(split, idx) {
              //return <li key={ idx }>{ split }</li>
            //})
          //}            
        //</ul>
    //);
  //}
//});

//module.exports = Splits;
