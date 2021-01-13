import React, { Component } from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './App.css';
import ErrorButton from "../error-button/error-button";
import ErrorComponent from "../error-component/error-component";
import PeoplePage from "../people-page/people-page";

export default class App extends Component {

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

        return (
            <div className="stardb-app">
                <Header />
                { planet }
                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
                <ErrorButton/>
                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
            </div>
        );
    }
}