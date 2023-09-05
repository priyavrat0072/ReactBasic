import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import User from './User';

//UseState

// function App() {

//   let [data, setData] = useState("Anil");

//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={()=>setData("BITTU")}>UPDATE</button>
//     </div>
//   );
// }

// USE EFFECT

// function App(){

//   const[count,setCount] = useState(0)

//   useEffect(()=>{
//     console.log("USE EFFECT")
//   })

//   return(
//     <div className='App'>
//      <h2>useEffect</h2> 
//      <h2>{count}</h2>
//      <button onClick={()=>setCount(count+1)}>COUNTER</button>
//     </div>
//   )
// }

// USE EFFECT WITH STATE AND PROPS

// function App(){

//   const [data,setData] = useState(10)
//   const [count, setCount] = useState(100)

//   useEffect(()=>{
//     // console.log("Use Effect Called for data")
//   },[data])

//   useEffect(()=>{
//     // console.log("Use Effect Called for count")
//   },[count])

//   return(
//     <div className='App'>
//       <h2>USE EFFECT WITH STATE AND PROPS</h2>
//       <User count={count} data = {data}/>
//       {/* <h2>{count}<br/><br/>{ data}</h2> */}
//       <br/><br/>
//       <button onClick={()=>setCount(count+1)}>UPDATE COUNTER</button>
//       <br/><br/>
//       <button onClick={()=>setData(data+1)}>UPDATE Data</button>
//     </div>
//   )
// }



export default App;
