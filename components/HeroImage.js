import React from 'react';
import styled from 'styled-components';

class HeroImage extends React.PureComponent {
    render() {
        return (
            <LakeImage
                src='/images/hero.png'
                alt='Pat & Melanie in Aurora, NY'
            />
        );
    }
}

export default HeroImage;

const LakeImage = styled.img`
    width: 200px;
`;
