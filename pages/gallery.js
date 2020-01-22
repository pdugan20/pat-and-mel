import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Page from '../layouts/main';
import { RootView } from '../styles/page';
import { photos } from '../constants/photos';
import Navigation from '../components/page/Navigation';
import { PrimaryHeading } from '../styles/headings';

const modalBackgroundColor = 'rgba(0,0,0,0.9)';

class GalleryPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Photo Gallery',
            currentImage: 0,
            viewerIsOpen: false,
        };
    }

    openLightbox = (event, { index }) => {
        this.setState({
            currentImage: index,
        });
        this.timeout = setTimeout(() => {
            this.setState({ viewerIsOpen: true });
        }, 500);
    };

    closeLightbox = () => {
        this.setState({
            viewerIsOpen: false,
        });
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
        const { viewerIsOpen, currentImage } = this.state;

        return (
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal
                        onClose={this.closeLightbox}
                        allowFullscreen={false}
                        styles={{
                            blanket: (base) => ({
                                ...base,
                                backgroundColor: modalBackgroundColor,
                            }),
                        }}
                    >
                        <Carousel
                            currentIndex={currentImage}
                            views={photos}
                            components={{
                                FooterCount: () => null,
                            }}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        );
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
            <Page
                singleColumn
                title={title}
                desktopMaxWidth='1000px'
                mainColumn={this.renderMainColumn()}
            />
        );
    }
}

export default GalleryPage;

const GalleryRootView = styled(RootView)`
    display: block;
    width: 100%;

    .react-photo-gallery--gallery {
        margin: 0 -2px;
    }
`;
