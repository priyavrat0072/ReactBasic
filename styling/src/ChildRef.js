import React,{forwardRef} from "react"

function ChildRef(props, ref){
    return(
        <div>
            <h2>CHILD REF</h2>
            <input type="text" ref={ref} />
        </div>
    )
}
export default forwardRef(ChildRef);