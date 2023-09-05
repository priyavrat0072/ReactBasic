import React, { useEffect } from "react"

function User(Props){

    useEffect(()=>{
        console.log("PROPS COUNT")
        // console.log(Props)
    },[Props.count])

    useEffect(()=>{
        console.log("PROPS DATA")
    },[Props.data])

    return(
        <div className="User">
            <h3>Count Props: {Props.count}</h3>
            <h3>Data Props: {Props.data} </h3>
        </div>
    )
}

export default User