import React from 'react';
import styled from 'styled-components';
import {Row, Col, Card, Image, Button } from 'react-bootstrap';


const StyledList = styled.ul`
border: solid lightgrey;
width: 100%;
width: 10rem;
max-height: 300px;
padding: 0em;
overflow:scroll;
overflow-x: hidden; /* Hide horizontal scrollbar */
&::-webkit-scrollbar {
    width: 1px;
}
`

const StyledElmement = styled.li`
margin: 1rem;
`

const Genres = ({genres, onGenreChange}) => {

    return(
       <StyledList> 
            {genres.map((genre) => (
                <div key={genre.id}>
                    <StyledElmement>
                        <Row>
                            <Col md={2}>
                                <input type="checkbox" data-genreid={genre.id} checked={genre.isChecked} onChange={onGenreChange} />
                            </Col>
                            <Col md={8}>
                                {genre.name}
                            </Col>
                        </Row>

                        
                    </StyledElmement>
                </div>
                ))}
        </StyledList>
    )
}


            
export default Genres;