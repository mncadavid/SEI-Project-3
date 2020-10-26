import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const SelectedPlaceCards = (props) => {

    return(
        <Card variant="outlined" className="selected-place-card">
            <img src={props.selected.icon} />
            <p>{props.selected.name}</p>
            <Button variant="contained" color="primary">Remove</Button>
        </Card>
    )
}

export default SelectedPlaceCards;