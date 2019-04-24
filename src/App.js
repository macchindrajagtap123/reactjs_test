import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);



/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Component1 from './Components/Component1.jsx';
import { connect } from 'react-redux';
/*class App extends Component {
  constructor(){
    super();
    this.state={
      data:[
        {
          "id":1,
          "name":"macchindra",
          "age":20
        },
          {
            "id":2,
            "name":"MJ",
            "age":27
          }
        ],
        myState:"Initial Stata......"
    }
    this.updateState=this.updateState.bind(this);
  }
  updateState(e){
    this.setState({myState:e.target.value});
    }
  render() {
    return (
      <div>
               <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
               </table>
               <Content myDataProp={this.state.myState} updateStateProp={this.updateState}></Content>
               <Component1></Component1>
      </div>
    );
  }
}
class TableRow extends Component{
render(){
  var mystyle={
    border:'2px solid black'
 }
return(
<tr style={mystyle}>
  <td>{this.props.data.id}</td>
  <td>{this.props.data.name}</td>
  <td>{this.props.data.age}</td>
</tr>
);
}
}

class Content extends React.Component {
  render() {
     return (
        <div>
           <input type = "text" value = {this.props.myDataProp} 
              onChange = {this.props.updateStateProp} />
           <h3>{this.props.myDataProp}</h3>
        </div>
     );
  }
}*/
/*
class App extends React.Component {
  render() {
     return (
        <div className="App">
         <div>Age: <span>{this.props.age}</span></div>
         <button onClick={this.props.onAgeUp}>Age UP</button>
         <button onClick={this.props.onAgeDown}>Age Down</button>
        </div>
     );
  }
}

const mapStateToProps = state => {
  return{
    age:state.age
  };
};
const mapDispatchToProps = (dispatch) => {
  return{
    onAgeUp: ()=> dispatch({type: 'AGE_UP'}),
    onAgeDown: ()=> dispatch({type: 'AGE_DOWN'})
  };
};


export default connect(mapStateToProps,mapDispatchToProps) (App);
*/