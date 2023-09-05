import React from "react";

class StudentClass extends React.Component{

    
    render()
    {
        console.log(this.props)
      return(
        <div className="StudentClass">
            <h1>Student Class</h1>
            <h2>{this.props.name}</h2>
           
            </div>
      )
    }
}

export default StudentClass;