import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import classStyles from './Style/classStyle';

const SelectedPlaceCards = (props) => {
    const styles = classStyles();

    return(
        <Card variant="outlined" className={styles.selectedPlaceCard}>
            <img src={props.selection.icon} alt='something that needs something' />
            <p>{props.selection.name}</p>
            <Icon color="primary"
                onClick={() => props.handleDetailsClick(props.selection)}>zoom_in</Icon>
            <Button onClick={() => props.handleRemove(props.selection.id)} variant="contained" color="primary">Remove</Button>
        </Card>
    )
}

export default SelectedPlaceCards;