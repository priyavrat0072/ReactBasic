import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Userclass from './Userclass';
import User1 from './User1';
import React from 'react';
import { useState } from 'react';
import Student from './Student';
import StudentClass from './StudentClass';
import Profile from './Profile';
import Login from './Login';
import Passing from './Passing';


//<------------STATE IN FUNCTIONAL COMPOMNENT------------------->

// function App() {
  



//   let [data,setData] = useState("anil")

//   function Update(){
//     setData("Bittu")
    
//   }
//   console.log(data)
//   console.log("-----------------------------------------------------------------------------------")

//   return (
//       <div className="App"> 
//       <h1> State in react </h1>
//       <h1>{data}</h1>
//       <button onClick={Update} >Update Data</button>
//       </div>
//   );
// }

//<------------STATE IN CLASS COMPOMNENT------------------->

// class App extends React.Component{



//   constructor(){
//     super();
//     this.state={
//       data:1
//     }
//   }
//   apple(){
//     this.setState({data:this.state.data+1})

//   }
 
  

// render(){
//   console.log(this.state.data)
//   console.log("----------------------------------------------------------------------")
//   return(
//     <div className='App'>
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>this.apple()}>UpdateData</button>
//     </div>
//   )
// }

// }


 //PROPS IN FUNCTIONAL COMPONENT


//  function App(){
//   let [name, setName] = useState("Anil")

//   function   update(){
//     setName("Sidhu")
//   }

//   return(
  
  
//     <div className='App'>
//       <Student name={name}  />
      
//       <button onClick={()=>update()}>UpdateData</button>
//     </div>
//   )
 
// }

//PROPS IN CLASS COMPONENT


// class App extends React.Component{

//   constructor(){
//     super();
//     this.state={
//       name:"Anil"
//     }
//   }

//     render()
//     {
//       return(
//         <div className='App'>
//           <StudentClass name={this.state.name}  />
//           <button onClick={()=>this.setState({name:"Bittu"})}>updateName</button>
//         </div>
//       )
//     }
// }


// function App(){

//   const[data, setData] = useState(null)
//   const[print, setPrint] = useState(false)

//   function getData(val){
//     console.log(val.target.value)
//     setData(val.target.value)
//     setPrint(false)
//   }
//   return(
//     <div className='App'>
//       <h3>Input Box</h3>
//       <input type='text'  onChange={getData}/>
//       {
//         print?
//         <h1>{data}</h1>
//         :null
//       }
//       <br></br>
//       <button onClick={()=>setPrint(true)}>print Data</button>
//     </div>
//   )
// }

//HIDE SHOW ELEMENTS

// function App(){

//   const [status , setStatus] = useState(true)
 
  
//   return(
//     <div className='App'>
//       {
//         status?<h1>Hello</h1>:null
        
//       }
      

//       {/* <button onClick={()=>setStatus(false)}>Hide</button>
//       <button onClick={()=>setStatus(true)}>Show</button> */}

//       <button onClick={()=>setStatus(!status)}>Toggle</button>
//     </div>
//   )
// }

//HANDLE FORM

// function App(){

  

//   const [name,setName] = useState("")
//   const [tnc, setTnc] = useState(false)
//   const [intrest, setIntrest] = useState("")

//   console.log(name,tnc,intrest)

//   function getFormData(e){
//       e.preventDefault()
//   }

//   return(
//     <div className='App'>
//       <h1>FORM</h1>
//       <form onSubmit={getFormData}>
//       <input type='text' placeholder='NAME' onChange={(e)=>setName(e.target.value)} /> <br/> <br/>
//       <select onChange={(e)=>setIntrest(e.target.value)}>
//         <option>select option</option>
//         <option>Marvel</option>
//         <option>DC</option>
//       </select> <br/> <br/>

//       <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /> <span>Accept Tern & conditions</span> <br/> <br/>

//       <button type="submit">SUBMIT</button>
//       </form>
//     </div>
//   )
// }

// CONDITIONAL RENDERING

// function App(){
//   return(
//     <div className='App'>
//       <h1>FORM</h1>
//       <Profile/>
//     </div>
//   )
// }

// VALIDAION

// function App(){
//   return(
//     <div className='App'>
//       <h1>VALIDAION</h1>
//       <Login/>
//     </div>
//   )
// }

// PASS FUNCTIONN AS PROPS

function App(){

  function getData(){
    alert("hello from app")
  }

  return(
    <div className='App'>

      <h1>PASS FUNCTION AS PROPS</h1>

      <Passing  data={getData}/>
    </div>
  )
}

export default App;
