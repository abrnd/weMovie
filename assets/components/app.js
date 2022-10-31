import * as React from 'react';
import axios from 'axios';
import Movies from './movies';
import Container from 'react-bootstrap/Container';

const baseUrl = "https://localhost/api/movie";
const App = () => {

    const initialisation = {
        genres: [],
        movies: [],
    }
    const  [data, setData] = React.useState(initialisation);
    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            console.log(response);
            setData(response.data);
            console.log(response.data);

        });
    })


    return(
        <Container>
            <Movies 
                movies = {data.movies}
            />
        </Container>
    )
}


export default App;