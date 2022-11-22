import React from 'react';

import {Card, Button } from 'react-bootstrap';

import YoutubePlayer from './YoutubePlayer';
import rate from "../functions/rate";

const MovieDetails = ({details, onClose}) => {
    const rating = rate(details.vote);

    return (
        <Card>
            <Card.Header>
                <Button variant="light" size="sm" className="float-end" onClick={onClose}>x</Button>
            </Card.Header>
            <Card.Body>
                <YoutubePlayer trailer = {details.trailer} />
            </Card.Body>
            <Card.Footer>
                <h6>{details.title}</h6>
                <p>{rating} pour {details.voteCount} votes</p>
            </Card.Footer>
        </Card>

    );
}



export default MovieDetails;