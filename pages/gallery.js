import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Page from '../layouts/main';
import { RootView } from '../styles/page';
import { photos } from '../constants/photos';

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
            viewerIsOpen: true,
        });
    };

    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            viewerIsOpen: false,
        });
    };

    renderGallery = () => {
        return <Gallery photos={photos} onClick={this.openLightbox} />;
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
                            views={photos.map((x) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                            }))}
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
            </GalleryRootView>
        );
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
