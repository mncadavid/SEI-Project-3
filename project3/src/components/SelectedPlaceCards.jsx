import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const SelectedPlaceCards = (props) => {

    return(
        <Card variant="outlined" className="selected-place-card">
            <img src={props.selection.icon} alt='something that needs something' />
            <p>{props.selection.name}</p>
            <Button onClick={() => props.handleRemove(props.selection.id)} variant="contained" color="primary">Remove</Button>
        </Card>
    )
}

export default SelectedPlaceCards;