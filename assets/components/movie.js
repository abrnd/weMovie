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


    const img_url = "https://image.tmdb.org/t/p/original" + posterpath;
    const rate = [];
    const start_number = Math.round((vote / 2));
    for(let i = 0; i < 5; i++){
        (i < start_number) ? rate.push("★") : rate.push("☆");
    }

    return(
        <li className="mb-3">
            <Card  style={{ width: '40rem' }}>
                <Row>
                    <Col md={2}>
                        <Image src={img_url} fluid="true"/>
                    </Col>
                    <Col md={10}>
                        <Row>
                            <Col md={4}> <p className="fs-4 m-0">{title}</p></Col>
                            <Col md={5}>{rate.join(' ')}</Col>
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