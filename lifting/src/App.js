import logo from './logo.svg';
import './App.css';
import React from 'react'
import User from './User';
import Student from './Student';

// CONSTRUCTOR  METHOD

// class App extends React.Component{
//   constructor(){
//     super();
//     // console.log("Constructor")
//     // State defining
//     this.state={
//       data:'BITTU'
//     }
//   }
//   render()
  
//   {
//     // console.log("render")
//     return(
//       <div className='App'>
//           <h1>Hello {this.state.data}</h1>
//       </div>
      
//     )
//   }
// }

// RENDER  METHOD

// class App extends React.Component{

//   constructor(){
//     super();
//     this.state={
//       data:'Bittu'
//     }
    
//   }

 

//   render(){

    
//     return(
//       <div className='App'>
//         <h1>App {this.state.data}</h1>
//         <User data1={this.state.data}/>

//         <button onClick={()=>this.setState({data:"ANIL"})}>UPdate Data</button>
//       </div>
//     )
//   }
// }

//COMPONENT DID MOUNT

// class App extends React.Component{

//   constructor(){
//     super();
//     console.log("CONSTRUCTOR")

//     this.state={
//       name:'Anil'
//     }
//   }

//   componentDidMount()
//   {
//     console.log("componentDidMount")
//   }

//     render(){
//       console.log("RENDER")
//       return(
//         <div className='App'>
//           <h2>COMPONENT DID MOUNT</h2>
//           <h2>{this.state.name}</h2>
//           <button onClick={()=>this.setState({name:"Bittu"})}>Update</button>
//         </div>
//       )
//   }
// }

// COMPONENT DID UPDATE

// class App extends React.Component{

//   constructor(){
//     super();
//     console.log("constructor")
//     this.state={
//       counter:0
//     }
//   }

//   componentDidUpdate(preProps,preState,snapShot){
//     console.log("COMPONENT DID UPDATE")
//     console.log(preState.counter,this.state.counter)
//     // if(preState.counter === this.state.counter)
//     // {
//     //   alert("NOT GOOD")
//     // }

//     if(this.state.counter<10)
//     {
//       this.setState({counter:this.state.counter+1})
//     }
    
//   }

//   render()
//   {
//     console.log("render")
//     return(
//       <div className='App'>
//         <h2>COMPONENT DID UPDATE</h2>
//         <h2>{this.state.counter}</h2>
//         <button onClick={()=>this.setState({counter:1})}>UPDATE</button>
//       </div>
//     )
//   }
// }

// SHOULD COMONENT UPDATE

// class App extends React.Component{

//   constructor(){
//     super();
//     this.state={
//       count:0
//     }
//   }

//   shouldComponentUpdate(){
//     console.warn("shouldComponentUpdate",this.state.count)
//     if(this.state.count>5 && this.state.count<10)
//     {
//       return true;
//     }
//     else{
//       return false
//     }

//   }

//   render()
//   {
//     return(
//       <div className='App'>
//         <h2>SHOULD UPDATE</h2>
//         <h2>{this.state.count}</h2>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>UPDATE</button>
//       </div>
//     )
//   }
// }

// COMPONENT WILL UNMOUNT

class App extends React.Component{

  constructor(){
    super();
    this.state={
      show:true
    }
  }

  render(){
    return(
      <div className='App'>
        <h1>COMPONENT WILL UNMOUNT</h1>
        {
          this.state.show ? <Student/> : <h2>CHILD REMOVED</h2>
        }
        
        <button onClick={()=>this.setState({show: !this.state.show})}>Toggle CHILD</button>
      </div>
    )
  }
}

export default App;
