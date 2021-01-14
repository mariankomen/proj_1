import React, {Component} from 'react';

import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorComponent from "../error-component/error-component";
import SwapiService from "../../services/swapi-service";
import Row from '../row/row'


class ErrorBoundry extends Component{
    state ={
        hasError: false
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }
    render() {
        if(this.state.hasError) {
            return <ErrorComponent/>
        }
        return this.props.children;
    }
}





export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };


    render() {
        if (this.state.hasError) {
            return <ErrorComponent/>
        }
        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.GetAllPeople}>

                {(i) => (`${i.name}:  ${i.birth_year})`)}
            </ItemList>
        );
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} rigth={personDetails}/>
            </ErrorBoundry>

        );
    }
}