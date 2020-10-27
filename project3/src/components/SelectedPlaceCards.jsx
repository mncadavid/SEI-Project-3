import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';

const SelectedPlaceCards = (props) => {

    return(
        <Card variant="outlined" className="selected-place-card">
            <img src={props.selection.icon} alt='something that needs something' />
            <p>{props.selection.name}</p>
            <Icon color="primary"
                onClick={() => props.handleDetailsClick(props.selection)}>zoom_in</Icon>
            <Button onClick={() => props.handleRemove(props.selection.id)} variant="contained" color="primary">Remove</Button>
        </Card>
    )
}

export default SelectedPlaceCards;