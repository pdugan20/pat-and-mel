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
        prefetch: true,
    },
    {
        text: 'Accommodations & Travel',
        link: '/accommodations',
        target: null,
        prefetch: true,
    },
    {
        text: 'Gallery',
        link: '/gallery',
        target: null,
        prefetch: true,
    },
    {
        text: 'Schedule',
        link: '/schedule',
        target: null,
        prefetch: true,
    },
    {
        text: 'Registery',
        link: 'https://www.zola.com/registry/melanie-pat',
        target: '_blank',
        prefetch: false,
    },
];

class Navigation extends React.PureComponent {
    render() {
        const { centered } = this.props;

        return (
            <SecondaryLinkContainer centered={centered}>
                {navLinks.map(({ text, link, target, prefetch }, index) => (
                    <LinkContainer key={index}>
                        <Link href={link} key={index} prefetch={prefetch}>
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
