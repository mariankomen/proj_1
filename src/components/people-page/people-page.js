import React, {Component} from 'react';

import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorComponent from "../error-component/error-component";
import SwapiService from "../../services/swapi-service";

const Row = ({left, rigth}) => {
    return (
        <div className="content-block">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {rigth}
            </div>
        </div>
    )
}

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
        if (this.state.hasError) {
            return <ErrorComponent/>
        }
        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.GetAllPeople}
                      renderItem={({name, gender, birth_year}) => `${name}: (${gender}, ${birth_year})`}
            />
        );
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        return (
            <Row left={itemList} rigth={personDetails}/>
        );
    }
}