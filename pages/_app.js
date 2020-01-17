import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Fire from '../lib/db';

const theme = {};

class PatAndMel extends App {
    async componentDidMount() {
        await new Fire();
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default PatAndMel;
