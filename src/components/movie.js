import {Link} from 'react-router-dom';

function Movie(props){

    return(
        
        <>
           {props.movies.map((datas,index)=> (
            
                <div className="card col-10 col-md-3 col-lg-2 col-xxl-2" key={datas.imdbID} style={{margin: "1%"}}>
                    <Link to={`/eachMovie/${datas.imdbID}`}>
                    
                        <img className="card-img-top" src={datas.Poster} alt='movie'/>
                        <p className="card-title">{datas.Title} ({datas.Year}) imdbID : {datas.imdbID}</p>
                    </Link>
                    
                    
                </div>
         
        
           ))}

                    
        </>

    )
}

export default Movie;