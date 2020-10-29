import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import classStyles from './Style/classStyle';

// SelectedPlaceCards are displayed from within the TripContainer
const SelectedPlaceCards = (props) => {
    const classes = classStyles();

    return(
        <Card variant="outlined" className={classes.selectedPlaceCard}>

            <img src={props.place.icon} alt='{props.place.name}' />
            <div className={classes.placeName}>
                <p>{props.place.name}</p>
            </div>
            <div className={classes.infoButtonRemove}>
                <Icon color="primary" className={classes.infoButton}
                    onClick={() => props.handleDetailsClick(props.place)}>zoom_in</Icon>
                <Button onClick={props.handleRemoveFromTrip} variant="contained" color="primary">Remove</Button>
            </div>
        </Card>
    )
}

export default SelectedPlaceCards;