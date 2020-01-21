import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../constants/breakpoints';
import colors from '../constants/colors';

const mapApiKey = 'AIzaSyDNvaSlj_yrjkhClop5dPBDPSNUjOUS_a8';

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
    zoom: 17,
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
            lat: 42.7545,
            lng: -76.70335,
        };

        this.setState({ center });
    }

    initializeMap = async () => {
        this.setCenter();
    };

    renderEmptyState = () => {
        return <MapEmptyState />;
    };

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
    height: 300px;
    width: 100%;
    border-radius: 4px;
    margin-top: 24px;

    @media ${device.tablet} {
        height: 250px;
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
