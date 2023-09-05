import React from "react";

function Passing(Props){
return(
    <div>
        <h1>PropsFunction</h1>
        <button onClick={()=>Props.data()}>Click on data</button>
    </div>
)
}
export default Passing;