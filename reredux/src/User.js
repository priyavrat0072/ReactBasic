import React from 'react'

function User(props){
    // console.log(props.data)
    return(
        <div>
            <h2>Name : {props.data.name }</h2>
            <h2>Age : {props.data.age }</h2>
        </div>
    )
}

export default User