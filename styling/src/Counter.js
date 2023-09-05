import React, { PureComponent } from "react";

class Counter extends PureComponent{
    render(){
        console.log("Child-Check-rerendering")
        return(
            <div>
                <h3>Counter</h3>
                <h4>{this.props.count}</h4>
            </div>
        )
    }
    
}
export default Counter;