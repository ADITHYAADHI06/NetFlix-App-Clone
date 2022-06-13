import React ,{ useEffect,useState} from 'react'
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"


const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title ,fecthUrl,islargeRow}) {
   const [movies, setMovies] = useState([])
   const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => { 
    
        const fecthingData = async () => {
            try {
              const response = await fetch(fecthUrl);
              const json = await response.json();
              setMovies(json.results)
              // console.log(json.results);
              return json;

            } catch (error) {
              console.log("error", error);
            }
          };

        fecthingData();
    }, [fecthUrl]);
    
//  trailler
   const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // movieTrailer this method search the youtube trailer based on the movie name
      movieTrailer(movie?.name || "")
        .then((url) => {
          //! https://www.youtube.com/watch?v=c8KYMUbzpTw

          //! URLSearchParams provoids utility methods  to work with query string of URL
          const urlParams = new URLSearchParams(new URL(url).search);
          // URL() construtor returns newly returned url search() search for ?.
          //! urlParams.get("v")  this method gives after v (value of v)
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };


   const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    },
   };

  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row__posters'>
         {  movies.map((movie,index)=>{
         return <img className={` row__poster ${islargeRow && "row__posterLarge"}`} onClick={()=>{ handleClick(movie) }} src={`${baseUrl}${islargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} key={index} />
            }) 
          }    
        </div>

        {trailerUrl && <YouTube  videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row