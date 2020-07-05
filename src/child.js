  
import React from 'react';
import  { Component } from 'react';
class  Child extends Component {
  state={
    data:'  it is child',
    hasError:false
  }
  constructor(props) {
    super(props);
    console.log("constructor");
  }
//   componentWillMount(){
//   //   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   // .then(response => response.json())
//   // .then(json => this.setState({data:json.userId}))
//     console.log("componentWillMount "+this.state.data);
//   }
  componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => this.setState({data:json.userId}))
    console.log("componentDidMount");
  }
//   componentWillReceiveProps(next,state){
//     if(this.props.data!==next.data)
//     console.log("componentWillReceiveProps");
//     console.log(next);
//     console.log(this.props);
//     console.log("componentWillReceiveProps "+next+" propsnow "+this.props);
//   }
//   shouldComponentUpdate(){
//     console.log("shouldComponentUpdate");
//     return 1;
//   }
//   componentWillUpdate(){
//     console.log("componentWillUpdate");
//   }
//   componentDidUpdate(){
//     console.log("componentDidUpdate");
//   }
//   componentWillUnmount(){
//     console.log("componentWillUnmount");
//   }
//   static getDerivedStateFromProps(props, state){
//       console.log('getderivedstatefromprop'+props+'state'+state);
//       console.log(props);
//       return props;
//   }  
componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }
  handleClick() {
    this.setState({ hasError: true });


}
    render(){
    console.log("render");
    if(this.state.hasError)
    throw new Error('I crashed!');

    let x=this.state;
    if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong. in child</h1>;
      }
      return (
        <div className="App" > CHild get parent as props :
        
        {this.state.data}
        <button onClick={() => this.handleClick()}>
        click me
      </button>
        </div>
      );
    }
  }
export default Child;

