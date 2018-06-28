import React from 'react';
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import markers from "./data/markerData"

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px`, width: '100%' }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }), withScriptjs, withGoogleMap)(() => {
    return(
        <GoogleMap  defaultZoom={3}
                    defaultCenter={{lat: 34.128184, lng: -41.818752}}>

            {markers.map(marker => (
                <Marker position={{lat: marker.lat , lng: marker.lng}}/>
            ))}
        </GoogleMap>
    );
});

export default Map;