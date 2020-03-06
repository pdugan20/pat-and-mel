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
        target: null,
    },
    {
        text: 'Accommodations & Travel',
        link: '/accommodations',
        target: null,
    },
    {
        text: 'Gallery',
        link: '/gallery',
        target: null,
    },
    {
        text: 'Schedule',
        link: '/schedule',
        target: null,
    },
    {
        text: 'Registery',
        link: 'https://www.zola.com/registry/melanie-pat',
        target: '_blank',
    },
];

class Navigation extends React.PureComponent {
    render() {
        const { centered } = this.props;

        return (
            <SecondaryLinkContainer centered={centered}>
                {navLinks.map(({ text, link, target }, index) => (
                    <LinkContainer key={index}>
                        <Link href={link} key={index} prefetch={false}>
                            <GlobalLink href={link} target={target}>
                                {text}
                            </GlobalLink>
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
