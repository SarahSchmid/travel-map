import React from 'react';
import MarkerPic from '../google-maps-marker.png';

const Header = () => {
    return(
        <div className="header">
            <div className="pageTitle">
                Here goes...
            </div>
            <img className="markerPic" src={MarkerPic}/>
        </div>
    );
};

export default Header;