import React,{useEffect , useRef} from "react"

function User(Props){

    const lastVal = useRef();
    
    useEffect(()=>{
        lastVal.current = Props.count
    })
    const previousProps = lastVal.current
    return(
        <div>
           <h2> User current value {Props.count} </h2>
           <h2> User previous value {previousProps} </h2>
        </div>
    )
}

export default User