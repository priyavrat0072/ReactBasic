import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import Page404 from './component/Page404';
import User from './component/User';
import Filter from './component/Filter';
import Cont from './component/Cont';
import Company from './component/Comapny'
import Channel from './component/Channel'
import Other from './component/Other'
import Login from './component/Login';
import Protected from './component/Protected';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>

        <Routes>
          <Route path="/" element={<Protected Component ={Home} />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About />} />
          <Route path ="/user/:name" element={<User/>} />
          <Route path = "/filter" element={<Filter/>} />
          <Route path = "/contact/" element={<Cont/>}>
              <Route path="company" element={<Company/>} />
              <Route path="channel" element={<Channel/>} />
              <Route path="other" element={<Other/>} />
          </Route>
         


          {/* <Route path="/*" element={<Page404/>} /> */}
          <Route path='/*' element={<Navigate to="/" />}  />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
