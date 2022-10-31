import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const StyledOverview = styled.p`
    display: -webkit-box; 
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 3; 
    overflow: hidden;
`;

const Movie = ({index, overview, title, posterpath, vote, count}) => {

    const rating = new Array (5);
    const number_of_star = Math.round((vote / 2));

    return(
        <li>
            <Card>
                <Row>
                    <Col md={2}>
                        <Image>
                        </Image>
                    </Col>
                    <Col md={10}>
                        <Row>
                            <Col md={4}> <p className="fs-4 m-0">{title}</p></Col>
                            <Col md={5}>
                                {rating.map( (number_of_star, index) => {
                                    return (index < number_of_star) ? <p>★</p> : <p>☆</p>;
                                })}
                            </Col>
                            <Col md={3}><p className="fs-6 m-0">{count}</p></Col>

                        </Row>
                        <div>

                        </div>
                        <div>
                            <StyledOverview className="fs-6" >
                                {overview}
                            </StyledOverview>
                        </div>
                    </Col>
                </Row>
            </Card>
        </li>
    )
}

const getRate = () => {

}

export default Movie;