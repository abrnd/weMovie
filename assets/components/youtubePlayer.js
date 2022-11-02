import React from 'react';
import styled from 'styled-components';

const StyledPlayer = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
`;

const styledFrame = styled.iframe`
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
`

const YoutubePlayer = ({trailer}) => {
    
    return(
        <div>
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${trailer}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
    )
}

export default YoutubePlayer;