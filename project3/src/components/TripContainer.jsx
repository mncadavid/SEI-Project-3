import React, { Component } from 'react';
import SelectedPlaceCards from './SelectedPlaceCards';
import Paper from '@material-ui/core/Paper';

class TripContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: []
        }
    }

    handleRemove = (id) => {
        alert("Remove button connected")
    }

    render() {
        if(this.props.place != null && !this.state.selected.includes(this.props.place)) {
            let selectedPlaces = this.state.selected
            selectedPlaces.push(this.props.place)
            this.setState({
                selected: selectedPlaces
            })
        }
        return(
            <Paper elevation={3} className="trip-container">
                    <h3>Planned Trip</h3>
                    <div>
                        {this.state.selected.map((selected, id) => {
                            return <SelectedPlaceCards selected={selected} key={id} handleRemove={this.handleRemove}/>
                        })}
                    </div>
            </Paper>
        )
    }
}

export default TripContainer;