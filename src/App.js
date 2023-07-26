
import './App.css';
import {Routes,Route} from 'react-router-dom';
import EachMovie from './components/eachMovie.js';
import Home from './components/Home.js';



function App() {



  return (
    <div>

      <div className="header" style={{height: "5.5rem", backgroundColor: "black", width: "100%"}}>
        <h1 style={{color: "white", paddingTop: "15px", paddingLeft: "40px", fontFamily: "sans-serif"}}>Any Search</h1>
        <p style={{color: "gold", lineHeight: "0", paddingLeft: "55px"}}>Search for any movie information.</p>
      </div>


      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/eachMovie/:imdbID" element={<EachMovie/>}></Route> 
      </Routes>

    </div>


    
        

        

        
  


      


  
  );
}

export default App;
