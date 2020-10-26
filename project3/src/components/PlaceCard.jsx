import React from 'react';

function PlaceCard(props){
    let dollars = new Array(props.place.price_level);
    for(let i=0; i<dollars.length; i++){
        dollars[i] = i;
    }

    return(
        <div className="place-card">
            <h3 className="rating">&#9733;{props.place.rating}</h3>
            <div className="place-card-inner">
                <h4 className="place-name">{props.place.name}</h4>
                {dollars.forEach(dollar => <p key={dollar}>$</p>)}
            </div>
            <p className="description">{props.place.description}</p>
            <img className="learn-more" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg" alt="Learn More" onClick={() => props.handleDetailsClick(props.place)}/>
        </div>
    )
}

export default PlaceCard;