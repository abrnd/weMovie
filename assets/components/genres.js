import React from 'react';

const Genres = ({genres, onGenreChange}) => {

    return(
       <ul> 
            {genres.map((genre) => (
                <div key={genre.id}>
                    <li>
                        <input type="checkbox" data-genreid={genre.id} checked={genre.isChecked} onChange={onGenreChange} />
                        {genre.name}
                    </li>
                </div>
                ))}
        </ul>
    )
}


            
export default Genres;