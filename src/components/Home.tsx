import React, { Component } from 'react';
var RuleEngine = require('node-rules');
import {fact} from './rules/fact';
import {rules} from './rules/rule';

//sample fact to run the rules on	

//initialize the rule engine

//Now pass the fact on to the rule engine for results

export default class Home extends Component<any, any> {

  constructor(props) {
      super(props);
      this.state = { soultion:null};
      let R = new RuleEngine(rules);
      R.execute(fact,(result)=>{this.do(result);});      
  } 
  do(result){ 

    if(result.result) {
      console.log("Payment Accepted"); 
      this.setState({solution:'Payment Accepted'});          
    }
    else{
      console.log("Payment Rejected");
      this.setState({solution:'Payment Rejected'});
    }
  }  
  render (){

    return (<h1>{this.state.solution}</h1>);
}
}

  