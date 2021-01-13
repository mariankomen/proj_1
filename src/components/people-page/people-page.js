import React, {Component} from 'react';

import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorComponent from "../error-component/error-component";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
        hasError: false
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError){
            return <ErrorComponent/>
        }
        return(
            <div className="content-block">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.GetAllPeople}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        );
    }
}