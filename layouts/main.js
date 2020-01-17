import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Header from '../components/page/Header';
import { typeface, fontSize } from '../constants/type';
import { grid } from '../constants/dimensions';
import colors from '../constants/colors';
import { device } from '../constants/breakpoints';

import '../css/reset.css';
import '../css/nprogress.css';

const columnType = [PropTypes.object, PropTypes.array];

const propTypes = {
    mainColumn: PropTypes.oneOfType(columnType).isRequired,
    title: PropTypes.string.isRequired,
};

class Page extends React.PureComponent {
    constructor(props) {
        super(props);
        const { title } = this.props;

        Router.events.on('routeChangeStart', () => {
            NProgress.start();
        });

        Router.events.on('routeChangeComplete' || 'routeChangeError', () => {
            NProgress.done();
        });

        let pageTitle = title;
        if (!pageTitle.includes('Pet & Melanie')) {
            pageTitle = `${pageTitle} | Pat & Melanie`;
        }

        this.state = { pageTitle };
    }

    render() {
        const { mainColumn } = this.props;
        const { pageTitle } = this.state;

        return (
            <div>
                <GlobalStyle />
                <Header title={pageTitle} />
                <ContentGrid>
                    <MainColumn>{mainColumn}</MainColumn>
                </ContentGrid>
            </div>
        );
    }
}

Page.propTypes = propTypes;

export default Page;

const GlobalStyle = createGlobalStyle`
    body {
        background: ${colors.grayUltraLight};
        color: ${colors.blackText};
        font-family: ${typeface.sansSerif};
    }

    div, span {
        font-size: ${fontSize.md};
    }
`;

const ContentGrid = styled.div`
    max-width: ${grid.main};
    margin: 0 auto;
    vertical-align: top;
    display: flex;

    @media ${device.tablet} {
        flex-direction: column;
    }
`;

const MainColumn = styled.div`
    width: 100%;
    display: inline-block;
`;
