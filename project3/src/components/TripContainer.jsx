import React, { Component } from 'react';
import SelectedPlaceCards from './SelectedPlaceCards';

class TripContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: []
        }
    }
    render() {
        return(
            <div>
                <h3>Planned Trip</h3>
                <div>
                    {/* {this.state.selected.map((selected, id) => {
                        return <SelectedPlaceCards selected={selected} key={id}/>
                    })} */}
                </div>
            </div>
        )
    }
}

export default TripContainer;