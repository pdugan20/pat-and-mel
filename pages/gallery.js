import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Gallery from 'react-photo-gallery';
import FsLightbox from 'fslightbox-react';
import Page from '../layouts/main';
import { RootView } from '../styles/page';
import { photos } from '../constants/photos';
import Navigation from '../components/page/Navigation';
import { PrimaryHeading } from '../styles/headings';
import { device } from '../constants/breakpoints';

class GalleryPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Photo Gallery',
            currentImage: 0,
            photoArray: [],
        };
    }

    componentDidMount() {
        const photoArray = [];
        /* eslint-disable-next-line */
        for (const image in photos) {
            if ({}.hasOwnProperty.call(photos, image)) {
                photoArray.push(photos[image].src);
            }
        }
        this.setState({ photoArray });
    }

    openLightbox = (event, { index }) => {
        this.setState({
            currentImage: index + 1,
        });
    };

    toggleLightbox = () => {
        return true;
    };

    renderGallery = () => {
        return (
            <>
                <PrimaryHeading>Photo Gallery</PrimaryHeading>
                <Gallery photos={photos} onClick={this.openLightbox} />
            </>
        );
    };

    renderLightBox = () => {
        const { photoArray, currentImage } = this.state;
        if (photoArray.length > 0) {
            return (
                <FsLightbox
                    toggler={() => this.toggleLightbox()}
                    sources={photoArray}
                    slide={currentImage}
                    type='image'
                />
            );
        }
        return null;
    };

    renderMainColumn = () => {
        return (
            <GalleryRootView>
                {this.renderGallery()}
                {this.renderLightBox()}
                {this.renderLinkGroup()}
            </GalleryRootView>
        );
    };

    renderLinkGroup = () => {
        return <Navigation />;
    };

    render() {
        const { title } = this.state;

        return (
            <>
                <GlobalStyle />
                <Page
                    singleColumn
                    title={title}
                    desktopMaxWidth='1000px'
                    mainColumn={this.renderMainColumn()}
                />
            </>
        );
    }
}

export default GalleryPage;

const GlobalStyle = createGlobalStyle`
    body {
        @media ${device.tablet} {
            margin-right: 1px !important;
        }
    }
`;

const GalleryRootView = styled(RootView)`
    display: block;
    width: 100%;

    .react-photo-gallery--gallery {
        margin: 0 -2px;
    }
`;
