import logo from './logo.svg';
import './App.css';
import './style.css'
import style from './custom.module.css'
import { Button, Col } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import Users from './Users';
import React,{Fragment , PureComponent, useState, useMemo, createRef, useRef} from 'react';
import Cols from './Cols'
import Child from './Child';
import Counter from './Counter';
import ChildRef from './ChildRef';


// 3 TYPE OF STYLING
// function App() {
//   return (
//    <div>
//     <h1 className="primary">Style of type 1</h1>
//     <h1 style={{color:"yellow", backgroundColor:"black"}}>Style of type 2</h1>
//     <h1 className={style.success}> Style of type 3</h1>
//    </div>
//   );
// }


// BootSTRAP LIBRARY
// function App() {
//   return (
//     <div className="App">
//       <h1>HELLO</h1>
//       <>
//   <Button variant="primary">Primary</Button>{' '}
//   <Button variant="secondary">Secondary</Button>{' '}
//   <Button variant="success">Success</Button>{' '}
//   <Button variant="warning">Warning</Button>{' '}
//   <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
//   <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
//   <Button variant="link">Link</Button>
// </>
//     </div>
//   )
// }

//ARRAY

// function App(){

//   const Students = [
//     {name:'anil', email:'anil@test.com', contact:'234'},
//     {name:'peter', email:'peter@test.com', contact:'001'},
//     {name:'max', email:'max@test.com', contact:'002'},
//     {name:'sam', email:'sam@test.com', contact:'003'}
//   ]
//   // map looping
//   // Students.map((item)=>console.log(item))


//   return(
//     <div className='App'>
//       <table border='5'>
//         <tr>
//           <td>name</td>
//           <td>email</td>
//           <td>contact</td>
//         </tr>
//       {
//         Students.map((data)=>

//           <tr>
//             <td>{data.name}</td>
//             <td>{data.email}</td>
//             <td>{data.contact}</td>
//           </tr>

//         )
//       }
//       </table>
//     </div>
//   )
// }

// BOOTSTRAP TABLE

// function App(){
//   const users = [
//         {name:'anil', email:'anil@test.com', contact:'111'},
//         {name:'peter', email:'peter@test.com', contact:'811'},
//         {name:'max', email:'max@test.com', contact:'002'},
//         {name:'sam', email:'sam@test.com', contact:'111'}
//       ]


//   return(
//     <div className='App'>
//       <h2>BOOTSTRAP TABLE</h2>
//       <Table border='3' striped bordered hover size="sm">
//         <tbody>
//       <tr>
//           <td>name</td>
//           <td>email</td>
//           <td>contact</td>
//         </tr>

//       {
//         users.map((item,i)=>
//         item.contact === '111' ?
//         <tr key={i}>

//         <td>{item.name}</td>
//         <td>{item.email}</td>
//         <td>{item.contact}</td>
//       </tr>:null
//         )
//       }
//       </tbody>
//       </Table>
//     </div>
//   )
// }

//Nested list 
// function App() {

//   const users = [
//     { name: 'anil', email: 'anil@test.com', address: [{ hn: "22", city: "noida", country: "India" }, { hn: "22", city: "noida", country: "India" }, { hn: "22", city: "noida", country: "India" }, { hn: "22", city: "noida", country: "India" }] },
//     { name: 'peter', email: 'peter@test.com', address: [{ hn: "44", city: "guna", country: "India" }, { hn: "22", city: "noida", country: "India" }, { hn: "22", city: "noida", country: "India" }, { hn: "22", city: "noida", country: "India" }] },
//     { name: 'max', email: 'max@test.com', address: [{ hn: "55", city: "hhf", country: "India" }, { hn: "22", city: "noida", country: "India" }, { hn: "22", city: "noida", country: "India" }, { hn: "22", city: "noida", country: "India" }] },
//     { name: 'sam', email: 'sam@test.com', address: [{ hn: "33", city: "dfgd", country: "India" }, { hn: "22", city: "noida", country: "India" }, { hn: "22", city: "noida", country: "India" }, { hn: "22", city: "noida", country: "India" }] }
//   ]

//   return (
//     <div className='App'>
//       <h2>Nested LIST</h2>
//       <Table variant='dark' striped>
//         <tbody>
//           <tr>
//             <td>name</td>
//             <td>email</td>
//             <td>address</td>

//           </tr>
//           {
//             users.map((item) => 

//               <tr>

//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>
//                 <Table variant='dark' striped>
//                   <tbody>
//                   {
//                     item.address.map((k)=>
//                     <tr>
                      
//                     <td>{k.hn}</td>
//                     <td>{k.city}</td>
//                     <td>{k.country}</td>
//                     </tr>
                    
//                     )
//                   }
//                   </tbody>
//                   </Table>
//                 </td>

//               </tr>
//             )
//           }


//         </tbody>
//       </Table>
//     </div>
//   )
// }

//REUSE OF COMPONENT
// function App(){

//   const users = [
//         {name:'anil', email:'anil@test.com', contact:'234'},
//         {name:'peter', email:'peter@test.com', contact:'001'},
//         {name:'max', email:'max@test.com', contact:'002'},
//         {name:'sam', email:'sam@test.com', contact:'003'}
//       ]

//   return(
//     <div className='App'>
//       <h2>REUSE OF COMPONENT</h2>  
//       {
//         users.map((item,i)=>
//         <Users data={item}/>
          
//         )
//       }
//     </div>
//   )
// }

// React FRAGMENT 
// function App(){
//   return(
//    <div>
//     <h1>REACT FRAGMENT</h1>
//     <h1>REACT FRAGMENT</h1>
//     <table>
//       <tbody>
//         <tr>
//           <Cols/>
//         </tr>
//       </tbody>
//     </table>
//    </div>
      
    
//   )
// }

// LIFTING STATE UP


// SENDING DATA FROM CHILD TO PARENT
// function App(){

//   function parentAlert(item){
//     alert(item)
//   }
 
//   return(
//     <div className='App'>
//       <h1>Parent</h1>
//       <Child alert={parentAlert}/>
//     </div>
//   )
// }

//Pure Component
// class App extends PureComponent{

//   constructor(){
//     super();
//     this.state={
//       count:1
//     }
//   }
//   render(){
//     console.log("parent-Check-rerendering")
//     return(
//       <div className='App'>
//         <Counter count={this.state.count}/>
       
//         <button onClick={()=>this.setState({count:1})}>Update Count</button>
      
//       </div>
//     )
//   }
// }

// UseMemoHOOk 
// function App(){
//   const [count,setCount] = useState(0)
//   const [item,setItem] = useState(10)

//   const multiCountMemo = useMemo(function multiCount(){
//       console.log("multiCount")
//       return count*5
      
//     },[count]
//   )

  
//   return(
//     <div className='App'>
//     <h2>UseMemoHOOk</h2>
//     <h2>Count:{count}</h2>
//     <h2>{multiCountMemo}</h2>
//     <button onClick={()=>{setCount(count+1)}} >Count</button>
//     <h2>Item:{item}</h2>
//     <button onClick={()=>{setItem(item+10)}} >Item</button>
//     </div>
//   )
// }


// Use REF CLASS COMPONENT
// class App extends React.Component{

//   constructor()
//   {
//     super();
//     this.inputRef = createRef();
//   }
//   componentDidMount(){
//     // console.log(this.inputRef)
//   }

//   getVal(){
//     console.log(this.inputRef.current.value)
//     this.inputRef.current.style.color="red"
//     this.inputRef.current.style.background="blue"
//   }

//  render(){
//   return(
//     <div className='App'>
//       <h2>Use REF</h2>
//       <input type='text' ref={this.inputRef}></input>
//       <button onClick={()=>this.getVal()}>UPDATE</button>
//     </div>
//   )
//  }
// }

//// Use REF Functional COMPONENT

// function App(){

//   let inputRef = useRef(null)

//   function handleInput(){
//     console.log("handle")
//     inputRef.current.value="1000"
//     inputRef.current.focus()
//   }

//   return(
//     <div className='App'>
//       <h2>USE REF</h2>
//       <input type='text' ref={inputRef} />
//       <button onClick={()=>handleInput()}>HANDLE</button>
//     </div>
//   )
// }

//Forward Ref

// function App(){

//   let inputRef = useRef(null)

//   function updateInput(){
//     inputRef.current.value =" 1000"
//     inputRef.current.focus()
//   }

//   return(
//     <div className='App'>
//       <h2>App Ref</h2>
//       <ChildRef ref={inputRef} />
//       <button onClick={()=>updateInput()}>APP BUTTON</button>
//     </div>
//   )
// }

// Controlled COMPONENTS
// function App(){

//   let [val,setVal] = useState("")
 

//   return(
//     <div className='App'>
//       <h1>Controlled COMPONENTS</h1>
//       <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/> <br/><br/>
     
//       <h2>VAL :{val}</h2>
      
//     </div>
//   )
// }

// UnControlled COMPONENTS
// function App(){

//   let inputRef = useRef(null)
//   let inputRef2 = useRef(null)


//   function submitForm(e){
//     e.preventDefault()
//     console.log("Input Feild 1 Value: ", inputRef.current.value )
//     console.log("Input Feild 1 Value: ", inputRef.current.value )
//     let input3 = document.getElementById('input3').value
//     console.log("Input Feild 3 Value: ", input3 )
//   }

//   return(
//     <div className='App'>
//       <form onSubmit={submitForm}>
//       <br/><br/>
//         <input ref={inputRef} type='text'/> <br/><br/>
//         <input ref={inputRef2}type='text'/> <br/><br/>
//         <input id='input3' type='text'/> <br/><br/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// High Order Comonent
function App(){
  return(
    <div className='App'>
      <h2>High Order Comonent</h2>
        <HOCRed cmp={County}/>
        <HOCGreen cmp={County}/>
    </div>
  )
}

function HOCRed(props){
  return <h2 style={{backgroundColor:'red'}}> <props.cmp/> </h2>
}
function HOCGreen(props){
  return <h2 style={{backgroundColor:'green'}}> <props.cmp/> </h2>
}

function County(){

  const [ county,setCounty] = useState(0)

  return(
    <div>
      <h3> Count :{county}</h3>
      <button onClick={()=>setCounty(county+1)}>UPDATE</button>
    </div>
  )
}



export default App;
