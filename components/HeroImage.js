import React from 'react';
import styled from 'styled-components';
import { device } from '../constants/breakpoints';

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

    @media ${device.tablet} {
        width: 150px;
    }
`;
