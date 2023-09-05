import { Link } from "react-router-dom"
function About() {
    return (

        <div>
            <h2>About</h2>
            <p>dgggfdgfdjgjdgijdfigjdfijgidfjgidjfgidfgdfjg</p>
            <p>ddfhffjdgjkdfgjhdfgjhfdgdfghhdfbgbdgfbfgbdfhbg</p>
            <Link to="/">Home</Link>
            <br />
            <Link to="/user/anil" state={{name:'anil sidhu'}}>Anil</Link>
            <br />
            <Link to="/user/peter">Peter</Link>

        </div>


    )
}
export default About