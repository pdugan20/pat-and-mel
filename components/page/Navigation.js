import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
    SecondaryLinkContainer,
    GlobalLink,
    LinkContainer,
} from '../../styles/links';

const propTypes = {
    centered: PropTypes.bool,
};

const defaultProps = {
    centered: false,
};

const navLinks = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'Accommodations & Travel',
        link: '/accommodations',
    },
    {
        text: 'Gallery',
        link: '/gallery',
    },
    {
        text: 'Schedule',
        link: '/schedule',
    },
];

class Navigation extends React.PureComponent {
    render() {
        const { centered } = this.props;

        return (
            <SecondaryLinkContainer centered={centered}>
                {navLinks.map(({ text, link }, index) => (
                    <LinkContainer key={index}>
                        <Link href={link} key={index}>
                            <GlobalLink href={link}>{text}</GlobalLink>
                        </Link>
                    </LinkContainer>
                ))}
            </SecondaryLinkContainer>
        );
    }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;
