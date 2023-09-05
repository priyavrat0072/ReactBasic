import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

function Protected(props){
    const { Component } = props;
    const navigate =  useNavigate();
    useEffect = (()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
    });
    return(
        <div>
            <h2>abc</h2>
            <h2><Component/></h2>
        </div>
    )
}
export default Protected