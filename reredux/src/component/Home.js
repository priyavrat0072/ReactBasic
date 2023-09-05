import React from "react";

function Home(props){
    console.log("Home props",props)
    return(
        <div>
            <h2>HOME COMPONENT</h2>

            {/* <div className="add-to-cart">
            <span className="cart-count">{props.data.length}</span>
                <img src="https://i.pinimg.com/originals/df/70/fc/df70fc7f957c5811ff783ad0efdd4966.jpg" />
            </div> */}

            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_homescreen_inline.jpg.large.jpg" />
                </div>
                <div className="text-wrapper item">
                   <span>Iphone</span>
                </div>
                <div className="text-wrapper item">
                   <span>Price $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'i Phone 12'})}>ADD to CART</button>
                </div>
            </div>
        </div>
    )
}

export default Home;