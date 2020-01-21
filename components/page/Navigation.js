import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { SecondaryLinkContainer, GlobalLink } from '../../styles/links';

const propTypes = {
    centered: PropTypes.bool,
};

const defaultProps = {
    centered: false,
};

class Navigation extends React.PureComponent {
    render() {
        const { centered } = this.props;

        return (
            <SecondaryLinkContainer centered={centered}>
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

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;
