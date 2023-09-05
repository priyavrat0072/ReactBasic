import { Link, useNavigate, useLocation } from "react-router-dom"

function Home(){
    

   
        const navigate = useNavigate();
        const navToPAge = ()=>{
            let x = false;
            x? navigate('/about'):navigate('/filter')
            
        }
     
    

    return(
        
        <div>
            <h2>Home</h2>
            <p>dgggfdgfdjgjdgijdfigjdfijgidfjgidjfgidfgdfjg</p>
            <p>ddfhffjdgjkdfgjhdfgjhfdgdfghhdfbgbdgfbfgbdfhbg</p>
            <Link to="/about">ABOUT</Link>
            <br/>
            <br/>
            <button onClick={()=>navToPAge()}>GO TO ABOUT PAGE</button>
            <br/>
            <button onClick={()=>navToPAge()}>GO TO Filter PAGE</button>
            
          
        </div>
        
    )
}
export default Home