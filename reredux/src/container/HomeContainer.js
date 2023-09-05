import { connect } from 'react-redux'
import Home from "../component/Home";
import { addToCart } from '../services/Actions/action'

const mapStateToProps=state=>({
    data:state.cardItems
})

const mapDispatchToProps = dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;