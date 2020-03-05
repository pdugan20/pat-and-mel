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
        external: false,
    },
    {
        text: 'Accommodations & Travel',
        link: '/accommodations',
        external: false,
    },
    {
        text: 'Gallery',
        link: '/gallery',
        external: false,
    },
    {
        text: 'Schedule',
        link: '/schedule',
        external: false,
    },
    {
        text: 'Registery',
        link: 'https://www.zola.com/registry/melanie-pat',
        external: true,
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
