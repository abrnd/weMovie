import React from 'react';
import Movie from './movie';


const Movies = ({movies, onDetailsClick}) => {

    return(
       <ul> 
            {movies.map((movie) => (
                <Movie 
                    key={movie.id}
                    movieid={movie.id}
                    overview={movie.overview}
                    title={movie.title}
                    posterpath={movie.poster_path}
                    vote={movie.vote_average}
                    count={movie.vote_count}
                    release_date={movie.release_date}
                    onDetailsClick={onDetailsClick}
                />
                ))}
        </ul>
    )
}


            
export default Movies;