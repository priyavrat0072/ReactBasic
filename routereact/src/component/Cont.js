import { Link, Outlet } from "react-router-dom"
function Cont(){
    return(
        <div>
            <h2>Contact</h2>
            <h4>THIS dsskldmklsdmklsdmvklsdmklsdklsdvklsnkvsdvmsklvkl</h4>

            <Link to="company">COMPANY</Link><br/>
            <Link to="channel">CHANNEL</Link><br/>
            <Link to="other">OTHER</Link>
            <Outlet></Outlet>
        </div>
    )
}

export default Cont