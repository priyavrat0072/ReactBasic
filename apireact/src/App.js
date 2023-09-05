import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'

//GET METHOD

function App() {
  const[data,setData] = useState([])

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [mobile,setMobile] = useState("")
  const [userId,setUserId] = useState(null)


  useEffect (()=>{
    getList()
      
  },[])

  function getList(){
    fetch("http://localhost:3000/post").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setData(resp)
        console.log(resp)
        setName(resp[0].name)
        setEmail(resp[0].email)
        setMobile(resp[0].mobile)
        setUserId(resp[0].id)
        
      })
      
     
    })
  }

  function deleteUser(id){
    // alert(id)
    fetch(`http://localhost:3000/post/${id}`,{
      method: 'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getList()
      })
    })
  }

  function selectUser(id){
    console.log(data[id-1])
    setName(data[id-1].name)
    setEmail(data[id-1].email)
    setMobile(data[id-1].mobile)
    setUserId(data[id-1].id)
  }

  function updateUser(){
    let item = {name,email,mobile,userId}
    fetch(`http://localhost:3000/post/${userId}`,{
      method: 'PUT',
      headers:{
        'ACCEPT':'application/json',
        'Content-type': 'application/json'

      },
      body:JSON.stringify(item)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getList()
      })
    })
  }

  return (
    <div className="App">
      <h1>API</h1>
      <table border='1'>
        <tr>
          <td> Id </td>
          <td> name </td>
          <td> email </td>
          <td> Phone </td>
          <td>REMOVE</td>
          <td>ADD</td>

         
        </tr>
        {
          data.map((item)=>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
            <td><button onClick={()=>selectUser(item.id)}>Update</button></td>

          </tr>
          
          )
        }
         
        
        
         
       
       </table>
       <div>
        <input type='text' value={name}  onChange={(e)=>setName(e.target.value)} /> <br/>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br/>
        <input type='text' value={mobile} onChange={(e)=>setMobile(e.target.value)} /> <br/>
        <button onClick={updateUser}>Update User</button>
       </div>
    </div>
  );
}

//POST METHOD

// function App(){

//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")
//   const [mobile, setMobile] = useState("")

//   function saveUser(){
//     console.warn({name,email,mobile})
//     let data = {name,email,mobile}
//     fetch("http://localhost:3000/post",{
//       method:'POST',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type': 'application/json'
//       },
//       body:JSON.stringify(data)
//     }).then((result)=>{
//       console.log(result)
//       result.json().then((resp)=>{
//         console.warn(resp)
//       })
//     })
//   }


//   return(
//     <div className='App'>
//       <h2>API</h2>
//       <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name="name" /> <br/>
//       <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}  name="email" /> <br/>
//       <input type='text' value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile" /> <br/>
//       <button onClick={saveUser} >SAVE NEW USER</button>
//     </div>
//   )
// }

export default App;
