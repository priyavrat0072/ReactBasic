import React from "react";

function Header(props){
    console.log("Header props",props)
    return(
        <div>
            <h2>HOME COMPONENT</h2>

            {/* <div className="add-to-cart">
            <span className="cart-count">{props.data.length}</span>
                <img src="https://i.pinimg.com/originals/df/70/fc/df70fc7f957c5811ff783ad0efdd4966.jpg" />
            </div> */}

          
        </div>
    )
}

export default Header;