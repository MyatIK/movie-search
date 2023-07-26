import '../App.css';
import {useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";

function EachMovie(){
    const {imdbID}=useParams();
    const[each,setEach]=useState({});
    const navigate=useNavigate();

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_API_MOVIE}`)
        .then(response => response.json())
        .then(data => setEach(data))},[imdbID])
    

    return(
        <>
            <div style={{height: "40px"}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                     <img src={each.Poster} alt='Poster' style={{display: "block", margin: "auto"}}/>
                    

                    </div>
                    <div className="col-6">
                        <h3>{each.Title}</h3>
                        <p style={{paddingTop: "25px"}}><b>Release Date:</b> {each.Released}</p>
                        <p><b>Genre:</b> {each.Genre}</p>
                        <p><b>Plot:</b> {each.Plot}</p>
                        <p><b>Awards:</b> {each.Awards}</p>
                        <p><b>imdbRating:</b> {each.imdbRating}</p>

                    </div>
                </div>


            </div>

            <button onClick={()=>navigate("/")}>Back</button>

        </>
        

    );
}

export default EachMovie;