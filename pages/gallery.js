import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import Page from '../layouts/main';
import { RootView, StyledDescription } from '../styles/page';
import { photos } from '../constants/photos';

class GalleryPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Photo Gallery',
        };
    }

    renderDescription = () => {
        return (
            <GalleryWrapper>
                <Gallery photos={photos} />
            </GalleryWrapper>
        );
    };

    renderMainColumn = () => {
        return <GalleryRootView>{this.renderDescription()}</GalleryRootView>;
    };

    render() {
        const { title } = this.state;

        return (
            <Page
                singleColumn
                title={title}
                mainColumn={this.renderMainColumn()}
            />
        );
    }
}

export default GalleryPage;

const GalleryRootView = styled(RootView)`
    display: block;
    margin: 32px;
`;

const GalleryWrapper = styled(StyledDescription)`
    text-align: left;
    width: 100%;
    max-width: initial;
    margin: 0 auto;
    margin-bottom: 32px;
`;
