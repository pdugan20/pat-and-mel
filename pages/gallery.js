import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import Page from '../layouts/main';
import { RootView } from '../styles/page';
import { photos } from '../constants/photos';

class GalleryPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Photo Gallery',
        };
    }

    renderGallery = () => {
        return <Gallery photos={photos} />;
    };

    renderMainColumn = () => {
        return <GalleryRootView>{this.renderGallery()}</GalleryRootView>;
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
    height: initial;
`;
