import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
border: solid lightgrey;
width: 100%;
max-height: 300px;
padding: 0em;
overflow:scroll;
overflow-x: hidden; /* Hide horizontal scrollbar */
`

const Genres = ({genres, onGenreChange}) => {

    return(
       <StyledList> 
            {genres.map((genre) => (
                <div key={genre.id}>
                    <li>
                        <input type="checkbox" data-genreid={genre.id} checked={genre.isChecked} onChange={onGenreChange} />
                        {genre.name}
                    </li>
                </div>
                ))}
        </StyledList>
    )
}


            
export default Genres;