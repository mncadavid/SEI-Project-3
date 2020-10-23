import React from 'react';

const SelectedPlaceCards = (props) => {

    return(
        <div>
            <img src={props.selected.image} />
            <p>{props.selected.name}</p>
        </div>
    )
}

export default SelectedPlaceCards;