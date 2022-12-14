import * as React from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
import Modal from 'react-modal';

import Movies from './movies';
import Genres from './genres';
import YoutubePlayer from './YoutubePlayer';
import MovieDetails from './movieDetails';
import Autocomplete from './Autocomplete';




const getInit = "https://localhost/api/init";
const getMovies = "https://localhost/api/movies/";
const getMovie = "https://localhost/api/movie/";

Modal.setAppElement('#root');

const App = () => {

    const [movies, setMovies] = React.useState([]);
    const [genres, setGenres] = React.useState([]);
    const [trailer, setTrailer] = React.useState("");
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [details, setDetails] = React.useState(null);

    React.useEffect(() => {
        axios.get(getInit).then((response) => {
            setMovies(response.data.movies);
            setGenres(response.data.genres.map( ({id, name}) => { return {id, name, isChecked: false}}));
            setTrailer(response.data.movies[0].trailer);
        })
    }, []);


    const handleGenreChange = (e) =>{
        const genreId = e.target.getAttribute("data-genreid");
        const index = genres.findIndex((genre) => genre.id == genreId);

        //uncheck all box
        genres.map( (genre) => {return genre.isChecked = false;});
        genres[index].isChecked = e.target.checked;
        setGenres([...genres]);

        //send request with no selected parameters
        const check = genres.every(({isChecked}) => !isChecked);
        const url = check ? getMovies : getMovies + genreId;

        axios.get(url)
        .then((response) => {
            setMovies(response.data);
            setTrailer(response.data[0].trailer);
        });
    }

    const handleDetailsClick = (e) =>{
        const movieId = e.target.getAttribute("data-movieid");
        const url = getMovie + movieId;
        axios.get(url).then((response) => {
            const movie = movies.find(movie => movie.id === parseInt(movieId));
            const next_details = {
                trailer: response.data,
                title: movie.title,
                vote: movie.vote_average,
                voteCount: movie.vote_count,
            }
            setDetails(next_details);
            //open modal
            setIsOpen(true);
        });
        
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const suggestionsList = movies.map( (movie) => {
        return movie.title;
    })
    
    return(
        <>
            <Container style={{maxWidth: '878px'}}>
                <Row className="mb-5">
                    <Col><h2>We Movie</h2></Col>
                    <Col className="pr-0"><Autocomplete className="float-end" suggestions={suggestionsList}  /></Col>
                </Row>
                <Row>
                    <YoutubePlayer trailer = {trailer} />
                </Row>
                <Row>
                    <Col md={2}>
                        <Genres genres = {genres} onGenreChange={handleGenreChange} />
                    </Col>
                    <Col md={6}>
                        <Movies movies = {movies} onDetailsClick={handleDetailsClick} />
                    </Col>
                </Row>
            </Container>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <MovieDetails details={details} onClose={closeModal}/>
            </Modal>
        </>
    )
}


export default App;