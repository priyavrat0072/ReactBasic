import React, { useState } from "react";
function Login(){

    const [User, setUser] = useState("")
    const [password, setPasssword] = useState("")
    const [userErr, setUserErr] = useState(false)
    const [passErr, setpassErr] = useState(false)
   
    // console.log(User)
    
    function loginHandle(e){

        if(userErr.length<3 || password.length<3){
            alert("type correct values")
        }
        else{
            alert("all Good")
        }



        e.preventDefault()
        
    }
    function userHandle(e){
       let item = e.target.value
       if(item.length<3){
        setUserErr(true)
       }
       else
       {
        setUserErr(false)
       }
       setUser(item)
    }
    function passwordHandler(e){
        let item = e.target.value
        if(item.length<3){
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
        setPasssword(item)

    }
    
return(
    <div className="login">
       <form onSubmit={loginHandle}>
       <h1>LOGIN</h1>
        <input type="text" placeholder="Enter User ID" onChange={userHandle} /> {userErr?<span>NOT VALID</span>:""} <br/><br/>
        <input type="password" placeholder="Enter User Password" onChange={passwordHandler}  /> {passErr?<span>NOT VALID</span>:""} <br/><br/>
        <button type="submit">LOGIN</button>
       </form>
    </div>
)
}
export default Login;