import './App.css';
import Row from './Row';
import requests from "./requests"
import Banner from "./Banner"
import Nav from './Nav';

function App() {
  return (
    <div className="App">

       <Nav />
       <Banner fecthUrl={requests.fetchNetflixOriginals} />
       <Row title="NETFLIX ORIGINALS" fecthUrl={requests.fetchNetflixOriginals} islargeRow={true} />
       <Row title="TRENDING NOW" fecthUrl={requests.fetchTrending} />
       <Row title="TOP RATED" fecthUrl={requests.fetchTopRated} />
       <Row title="ACTION MOVIES" fecthUrl={requests.fetchActionMovies} />
       <Row title="COMDEY MOVIES" fecthUrl={requests.fetchComedyMovies} />
       <Row title="HORROR MOVIES" fecthUrl={requests.fetchHorrorMovies} />
       <Row title="ROMANCE MOVIES" fecthUrl={requests.fetchRomanceMovies} />
       <Row title="DOCUMENTARIES" fecthUrl={requests.fetchDocumentaries} />     
    </div>
  );
}

export default App;
