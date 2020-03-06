import React from 'react';
import styled from 'styled-components';
import { device } from '../constants/breakpoints';
import spacing from '../constants/spacing';

class ConfirmationImage extends React.PureComponent {
    render() {
        return (
            <LakeImage
                src='/images/hero-2.png'
                alt='Pat & Melanie in tubing in Aurora, NY'
            />
        );
    }
}

export default ConfirmationImage;

const LakeImage = styled.img`
    width: 200px;
    margin: 0 auto ${spacing.md} auto;

    @media ${device.tablet} {
        width: 150px;
    }
`;
