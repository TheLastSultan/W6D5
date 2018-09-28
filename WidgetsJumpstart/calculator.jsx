import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {result: 0 , num1: "", num2: "", previousResults: [] }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);

  }

  setNum1(e){
    const num1 = parseInt(e.target.value);
    this.setState({ num1 });
  }

  setNum2(e){
    const num2= parseInt(e.target.value);
    this.setState({ num2 });
  }

  add(e){
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subtract(e){
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  reset(e){
    e.preventDefault();
    this.setState({num1: "", num2: "", result: 0})
  }

  // previousResultsMethod(){
  //   return(
  //   <ul>
  //     {this.props.previousResults.map(res=> <li>res</li>)}
  //   </ul>)
  // }

  render() {
    const {num1, num2, result, previousResults: [] } = this.state; 
    return (
      <div>
        <h1> we out here fr </h1> 
        <h1>{ result } </h1> 
        <input onChange={this.setNum1} value={num1}/>
        <input onChange={this.setNum2} value={num2}/>
        <br /> 
        {/* <Calculator previousResultsMethod={this.state.previousResults}/> */}
        <button onClick={this.add}> addition </button>
        <button onClick={this.subtract}> subtraction </button>
        <button onClick={this.reset}> reset </button>
      </div>
    );
  }
}

export default Calculator;