import React, { Component } from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './App.css';
import ErrorButton from "../error-button/error-button";
import ErrorComponent from "../error-component/error-component";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import Row from '../row/row'


export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch(error, errorInfo) {
        console.log("ComponentDidCatch")
        this.setState({hasError: true})
    }

    render() {

        if(this.state.hasError){
            return <ErrorComponent/>
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const { GetPeople, GetStarships,
                getPersonImage, getStarshipImage

        } = this.swapiService
        const personDetails = (
            <PersonDetails itemId={10}
                           getData={GetPeople}
                           getImageUrl={getPersonImage}
            />
        )
        const StarShipDetails = (
            <PersonDetails itemId={12}
                           getData={GetStarships}
                           getImageUrl={getStarshipImage}
            />
        )

        return (
            <div className="stardb-app">
                <Header />
                {/*{ planet }*/}
                {/*<div className='errors-block'>*/}
                {/*    <button*/}
                {/*        className="toggle-planet btn btn-warning btn-lg"*/}
                {/*        onClick={this.toggleRandomPlanet}>*/}
                {/*        Toggle Random Planet*/}
                {/*    </button>*/}
                {/*    <ErrorButton/>*/}
                {/*</div>*/}
                {/*<PeoplePage/>*/}

                <Row
                    left={personDetails}
                    rigth={StarShipDetails}
                />





                {/*<div className="content-block">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList onItemSelected={this.onPersonSelected}*/}
                {/*                  getData={this.swapiService.GetAllStarships}*/}
                {/*                  renderItem={({model}) => (<span>{model}, Helo</span>)}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="col-md-6">*/}
                {/*        <PersonDetails personId={this.state.selectedPerson} />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }
}