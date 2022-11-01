import React from 'react';
import Movie from './movie';

const Movies = ({movies}) => {

    return(
       <ul> 
            {movies.map((movie) => (
                <Movie 
                    key={movie.id} 
                    overview={movie.overview}
                    title={movie.title}
                    posterpath={movie.backdrop_path}
                    vote={movie.vote_average}
                    count={movie.vote_count}
                />
                ))}
        </ul>
    )
}


            
export default Movies;