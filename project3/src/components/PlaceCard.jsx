import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import classStyles from './Style/classStyle';

function PlaceCard(props){
    const classes = classStyles();
    let dollars = new Array(props.place.price_level).fill("$");

    return(
        <Card variant="outlined" className={classes.placeCard}>
            <Button 
                variant="contained" 
                color="primary" 
                disabled = {props.disabled}
                onClick={props.handleAddToTrip}
            >
                Add To Trip
            </Button>
            <h3 className={classes.rating}>&#9733;{props.place.rating}</h3>
            <div className={classes.placeCardInner}>
                <h4 className="place-name">{props.place.name}</h4>
                {dollars.map((dollar, index) => <Icon key={index}>attach_money</Icon>)}
            </div>
            <Icon color="primary"
                onClick={() => props.handleDetailsClick(props.place)}>zoom_in</Icon>
        </Card>
    )
}

export default PlaceCard;