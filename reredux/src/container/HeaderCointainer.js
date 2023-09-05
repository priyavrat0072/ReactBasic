import Header from "../component/Header";
import { connect } from 'react-redux'

// import { addToCart } from '../services/Actions/action'

const mapStateToProps=state=>({
    data:state.cardItems
})

const mapDispatchToProps = dispatch=>({
    // addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;