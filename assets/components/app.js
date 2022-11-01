import * as React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Movies from './movies';
import Genres from './genres';
import YoutubePlayer from './YoutubePlayer';


const getInit = "https://localhost/api/init";
const getMovies = "https://localhost/api/movies";
const App = () => {

    const [movies, setMovies] = React.useState([]);
    const [genres, setGenres] = React.useState([]);
    const [trailer, setTrailer] = React.useState("");


    React.useEffect(() => {
        axios.get(getInit).then((response) => {
            setMovies(response.data.movies);
            setGenres(response.data.genres.map( ({id, name}) => { return {id, name, isChecked: false}}));
            setTrailer(response.data.trailer.key);
        })
    }, []);

    const handleGenreChange = (e) =>{
        const genreId = e.target.getAttribute("data-genreid");
        const index = genres.findIndex((genre) => genre.id == genreId);

        //uncheck all box
        genres.map( (genre) => {return genre.isChecked = false;});
        genres[index].isChecked = event.target.checked;
        setGenres([...genres]);

        //if all checkbox uncheked
        const check = genres.every(({isChecked}) => !isChecked);
        const params = check ? {} : {id: genreId};

        axios.get(getMovies, {params})
        .then((response) => {
            setMovies(response.data);
        });
    }
    
    return(
        
        <Container>
            <Row>
                <YoutubePlayer trailer = {trailer} />
            </Row>
            <Row>
            </Row>
            <Row>
                <Col md={3}>
                    <Genres genres = {genres} onGenreChange={handleGenreChange} />
                </Col>
                <Col md={5}>
                    <Movies movies = {movies}/>
                </Col>
            </Row>

        </Container>
        
    )
}


export default App;