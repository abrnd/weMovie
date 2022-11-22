import React from 'react';
import {Row, Col, Card, Image, Button } from 'react-bootstrap';
import styled from 'styled-components';

import rate from "../functions/rate";

const StyledOverview = styled.p`
    display: -webkit-box; 
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 3;
    overflow: hidden;
`;

const Movie = ({movieid, description, title, background, vote, count, release_date, onDetailsClick}) => {

    const img_url = "https://image.tmdb.org/t/p/original" + background;
    const rating = rate(vote);
    const date = new Date(release_date);
    
    return(
        <li className="mb-3 bg-light">
                <Row>
                    <Col md={2} className="px-0">
                            <Image src={img_url} fluid="true"/>
                    </Col>
                    
                    <Col md={10}>
                    <Card  className="border-0  bg-light" style={{ width: '38rem' }}>
                            <Card.Header className="border-0 bg-light">
                                <Row>
                                    <Col md={4}> <p className="fs-5 pt-2 m-0">{title}</p></Col>
                                    <Col md={5} className="pt-2">{rating}</Col>
                                    <Col md={3}><p className="fs-6 pt-2 m-0">({count} votes)</p></Col>
                                </Row>
                            </Card.Header>
                            <Card.Body className="py-0">
                            <div>
                                <p>{date.getFullYear()}</p>
                            </div>
                            <div>
                                <StyledOverview className="fs-6" >
                                    {description}
                                </StyledOverview>
                            </div>
                            </Card.Body>
                            <Card.Footer className="py-0  border-0 bg-light">
                                <Button variant="primary" size="sm" className="float-end" data-movieid={movieid} onClick={onDetailsClick} >Lire le details</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
        </li>
    )
}


export default Movie;