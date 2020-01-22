import React from 'react';
import styled from 'styled-components';
import { device } from '../constants/breakpoints';
import spacing from '../constants/spacing';

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
    margin: 0 auto ${spacing.md} auto;

    @media ${device.tablet} {
        width: 150px;
    }
`;
