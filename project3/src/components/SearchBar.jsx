import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchCriteria: '',
            autocompleteOptions: []
        }
    }

    selectAutocompleteOption = () => {

    }

    updateSearchCriteria = async (e) => {
        const response = await axios.get()
        console.log(response)
        this.setState({searchCriteria: e.target.value})
    }

    render() {
        return (
            <div>
                <h2>Where do you wanna go?</h2>
                <form>
                    <input 
                        type='text' 
                        name='searchCriteria' 
                        placeholder='Search' 
                        onChange={(e)=>this.updateSearchCriteria(e)}
                        value={this.state.searchCriteria}
                    />
                    <input 
                        type='submit'
                        value='Search'
                    />
                </form>
                <div>

                </div>
            </div>
        )
    }
}

export default SearchBar;