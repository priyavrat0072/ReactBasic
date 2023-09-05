import { useParams, useLocation } from "react-router-dom";

function User(){
    const params = useParams();
    const {name} = params
    console.warn(name)
    const location = useLocation()
    console.log(location)
    return(
        <div>
            <h2>This is {name}'s page</h2>
        </div>
    )
}

export default User;