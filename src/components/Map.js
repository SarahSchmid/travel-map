import React from 'react';
import InfoBox from './InfoBox';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import '../Map.css'
import markers from "./data/markerData"

const {compose, withProps, withStateHandlers, withHandlers} = require("recompose");

const Map = compose(
    withStateHandlers(() => ({
        isOpen: false,
        showInfo: null
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
            showInfoIndex: null
        }),
        showInfo: ({showInfo,isOpen}) => (key) => ({
            isOpen: !isOpen,
            showInfoIndex: key
        })

    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            markerClusterer.getMarkers()
        },
    }),
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div className="loadingElement" />,
        containerElement: <div className="containerElement" />,
        mapElement: <div className="mapElement" />,
    }), withScriptjs, withGoogleMap)((props) => {
    return(
        <GoogleMap  defaultZoom={3}
                    defaultCenter={{lat: 39.910952, lng: -7.959756}}>
            <MarkerClusterer
                onClick={props.onMarkerClustererClick}
                averageCenter
                enableRetinaIcons
                gridSize={60}
                maxZoom={13}
            >
            {markers.map((marker, index) => (
                <Marker key={index}
                        position={{lat: marker.lat , lng: marker.lng}}
                        onClick={() => props.showInfo(index)}>
                    {(props.showInfoIndex === index) &&
                    <InfoWindow onCloseClick={props.onToggleOpen}>
                        <InfoBox title={marker.title} location={marker.location} description={marker.description}/>
                    </InfoWindow>
                    }
                </Marker>
            ))}
            </MarkerClusterer>
        </GoogleMap>
    );
});

export default Map;