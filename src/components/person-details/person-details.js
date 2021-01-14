import React, {Component} from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";

export default class PersonDetails extends Component {
    swapiService = new SwapiService();
    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }


    updatePerson() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            })
    }

    render() {
        if (!this.state.item) {
            return <span>Select a person from a list</span>
        }
        const {item, image} = this.state


        return (
            <div className="person-details card">
                <img className="person-image"
                     src={image}
                     alt='character'/>

                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{item.gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{item.birth_year}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{item.eye_color}</span>
                        </li>
                        <li className="list-group-item"><ErrorButton/></li>
                    </ul>
                </div>

            </div>
        )
    }
}
//hр