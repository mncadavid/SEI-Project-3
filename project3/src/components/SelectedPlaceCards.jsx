import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import classStyles from './Style/classStyle';

const SelectedPlaceCards = (props) => {
    const styles = classStyles();

    return(
        <Card variant="outlined" className={styles.selectedPlaceCard}>
            <img src={props.place.icon} alt='something that needs something' />
            <p>{props.place.name}</p>
            <div className="infoButton">
                <Icon color="primary"
                    onClick={() => props.handleDetailsClick(props.place)}>zoom_in</Icon>
                <Button onClick={props.handleRemoveFromTrip} variant="contained" color="primary">Remove</Button>
            </div>
        </Card>
    )
}

export default SelectedPlaceCards;