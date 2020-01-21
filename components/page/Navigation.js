import React from 'react';
import Link from 'next/link';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { SecondaryLinkContainer, GlobalLink } from '../../styles/links';

class Navigation extends React.PureComponent {
    render() {
        return (
            <SecondaryLinkContainer>
                <Link href='/'>
                    <GlobalLink href='/'>Home</GlobalLink>
                </Link>
                ·
                <Link href='/accommodations'>
                    <GlobalLink href='/accommodations'>
                        Accommodations & Travel
                    </GlobalLink>
                </Link>
                ·
                <Link href='/gallery'>
                    <GlobalLink href='/gallery'>Gallery</GlobalLink>
                </Link>
                ·
                <Link href='/schedule'>
                    <GlobalLink href='/schedule'>Schedule</GlobalLink>
                </Link>
            </SecondaryLinkContainer>
        );
    }
}

export default Navigation;
