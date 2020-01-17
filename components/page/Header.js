import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
};

class Header extends React.PureComponent {
    render() {
        const { title } = this.props;

        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1'
                    />
                    <meta charSet='utf-8' />
                    <link
                        rel='icon'
                        href='/images/favicon.png'
                        type='image/png'
                    />
                </Head>
            </>
        );
    }
}

Header.propTypes = propTypes;

export default Header;
