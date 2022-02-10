import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../constants/breakpoints';
import colors from '../constants/colors';
import spacing from '../constants/spacing';
import { borderRadius } from '../constants/dimensions';

const mapApiKey = 'AIzaSyDNvaSlj_yrjkhClop5dPBDPSNUjOUS_a8';
const desktopMapHeight = '300px';
const mobileMapHeight = '250px';

const propTypes = {
    mapOptions: PropTypes.object,
    zoom: PropTypes.number,
};

const defaultProps = {
    mapOptions: {
        panControl: false,
        mapTypeControl: false,
        streetViewControl: false,
    },
    zoom: 14,
};

class AuroraMap extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            center: null,
        };
    }

    async componentDidMount() {
        await this.initializeMap();
    }

    setCenter() {
        const center = {
            lat: 42.8988431,
            lng: -76.5511782,
        };

        this.setState({ center });
    }

    initializeMap = async () => {
        this.setCenter();
    };

    renderEmptyState = () => <MapEmptyState />;

    render() {
        const { center } = this.state;
        const { mapOptions, zoom } = this.props;

        return (
            <LoadScript
                googleMapsApiKey={mapApiKey}
                loadingElement={this.renderEmptyState()}
            >
                <MapContainer>
                    <GoogleMap
                        mapContainerClassName='hikeMap'
                        options={mapOptions}
                        center={center}
                        zoom={zoom}
                    />
                </MapContainer>
            </LoadScript>
        );
    }
}

AuroraMap.propTypes = propTypes;
AuroraMap.defaultProps = defaultProps;

export default AuroraMap;

const mapStyle = `
    border: 1px solid ${colors.grayLight};
    height: ${desktopMapHeight};
    width: 100%;
    border-radius: ${borderRadius.sm};
    margin-top: calc(${spacing.sm} + ${spacing.md});

    @media ${device.tablet} {
        height: ${mobileMapHeight};
    }
`;

const MapEmptyState = styled.div`
    ${mapStyle};
`;

const MapContainer = styled.div`
    .hikeMap {
        ${mapStyle};
    }
`;
