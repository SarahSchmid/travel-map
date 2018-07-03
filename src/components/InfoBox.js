import React from 'react';

const InfoBox = (props) => {
    return(
        <div className="infoBox">
            <h3>{props.title}</h3>
            <i>{props.location}</i>
            <div className="description">{props.description}</div>
        </div>
    );
};

export default InfoBox;