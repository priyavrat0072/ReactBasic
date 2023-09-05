// import logo from './logo.svg';
// import './App.css';
// import React,{useState} from 'react'
// import User from './User';


// Previous State
// function App() {
//   const [count,setCount] = useState(1)

//   function updateCount(){
//     let rand = Math.floor(Math.random()*10)
//     setCount((pre)=>{
//       console.log(pre)
//       if((pre-rand)<5)
//       {
//         // console.log(pre-rand)
//         // alert("topup")
//       }
//       return rand
//     })
    
//   }

//   return (
//     <div className="App">
//       <h1>STATES {count}</h1>
//       <button onClick={updateCount}>UPDATE</button>
//     </div>
//   );
// }

// Previous Props
// function App(){

//   const [count, setCount] = useState(0)

//   return(
//     <div className='App'>
//       <h1>Previous Props</h1>
//       <User count = {count} />
//       <button onClick={()=>setCount(Math.floor(Math.random()*10))} >Update Counter</button>
//     </div>
//   )
// }

// State With Object
// function App(){

//   const [data,setData] = useState({name:'anil',age:'25'})

//   return(
//     <div className='App'>
//       <h1>State with Object</h1>
//       <input type='text' placeholder='enter name' value={data.name} onChange={(e)=>setData({ ...data, name:e.target.value})} /> <br/>
//       <input type='text' placeholder='enter age' value={data.age} onChange={(e)=>setData({ ...data, age:e.target.value})} />
//       <h2>name:{data.name}</h2>
//       <h2>age:{data.age}</h2>
//     </div>
//   )
// }

// export default App;

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App;
