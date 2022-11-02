import React from 'react';

import {Card, Button } from 'react-bootstrap';

import YoutubePlayer from './YoutubePlayer';
import rate from "../functions/rate";

/*
            <Card.Header></Card.Header>
            <Card.body>
                <YoutubePlayer trailer = {details.trailer} />
                <div>{details.trailerTitle}</div>
            </Card.body>
            <Card.Footer>
                {details.title}
                {rating}
                {details.voteCount}
            </Card.Footer>
*/

const MovieDetails = ({details, onClose}) => {
    const rating = rate(details.vote);

    return (
        <Card>
            <Card.Header>
                <Button variant="light" size="sm" className="float-end" onClick={onClose}>x</Button>
            </Card.Header>
            <Card.Body>
                <YoutubePlayer trailer = {details.trailer} />
                <h5>{details.trailerTitle}</h5>
            </Card.Body>
            <Card.Footer>
                <h6>{details.title}</h6>
                <p>{rating} pour {details.voteCount}</p>
            </Card.Footer>
        </Card>

    );
}



export default MovieDetails;