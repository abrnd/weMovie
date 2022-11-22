import React from 'react';
import Movie from './movie';


const Movies = ({movies, onDetailsClick}) => {
    return(
       <ul> 
            {movies.map((movie) => (
                <Movie 
                    key={movie.id}
                    movieid={movie.id}
                    description={movie.description}
                    title={movie.title}
                    background={movie.background}
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