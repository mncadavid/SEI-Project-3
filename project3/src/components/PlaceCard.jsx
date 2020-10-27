import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';

function PlaceCard(props){
    let dollars = new Array(props.place.price_level).fill("$");

    return(
        <Card variant="outlined" className="place-card">
            <Button 
                variant="contained" 
                color="primary" 
                disabled = {props.disabled}
                onClick={props.handleAddToTrip}
            >
                Add To Trip
            </Button>
            <h3 className="rating">&#9733;{props.place.rating}</h3>
            <div className="place-card-inner">
                <h4 className="place-name">{props.place.name}</h4>
                {dollars.map(dollar => <Icon>attach_money</Icon>)}
            </div>
            <Icon color="primary"
                onClick={() => props.handleDetailsClick(props.place)}>zoom_in</Icon>
        </Card>
    )
}

export default PlaceCard;