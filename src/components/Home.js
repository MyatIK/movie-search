import {useState,useEffect} from 'react';
import '../App.css';
import Movie from './movie.js';



function Home(){

    const[name,setName]=useState('Barbie');
    const[info,setInfo]=useState([]);
    
  
    useEffect(()=>{
      fetch(`http://www.omdbapi.com/?s=${name}&apikey=${process.env.REACT_APP_API_MOVIE}`)
      .then(response => response.json())
      .then(data => setInfo(data.Search))},[name])
  
  
    const shift=function(e){
      if(e.key === "Enter"){
        return setName(e.target.value);
      }
  
    }
            
    return (
        <div>
            <div className="searchBar" style={{padding: "20px"}}>
                <input onKeyDown={shift} className="search w-50" type="text" placeholder="Search" name="searchBar"/>
            </div>

    

            <div className="container-fluid">
                <div className="row justify-content-center" >
                    {(typeof info != 'undefined')? (
                    <Movie movies={info}/>):(
                    <h2>No result found. Please type again.</h2>
                        )

                        }
            
                </div>


             </div>
            

        </div>
    );
}

export default Home;