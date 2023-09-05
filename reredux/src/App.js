import logo from './logo.svg';
import './App.css';
import User from './User';
import HomeContainer from './container/HomeContainer';
import HeaderCointainer from './container/HeaderCointainer';


// PROPS
// function App() {
//   return (
//     <div className="App">
//      <h1>REDUX component</h1>
//      <User data={{name:'anil', age :'26'}} />
//     </div>
//   );
// }

function App(){
  return(
    <div className='App'>
      <HeaderCointainer/>
      <HomeContainer/>

    </div>
  )
}

export default App;
