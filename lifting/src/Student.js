import React from "react";
class Student extends React.Component{

    componentWillUnmount(){
        console.log("COMPONENT UNMOUNT")
    }

    render(){
        return(
            <div className="Student">
                <h2>student</h2>
            </div>
            
        )
    }
}

export default Student