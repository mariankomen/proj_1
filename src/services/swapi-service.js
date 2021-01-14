export default class SwapiService {
    _miniUrl = 'https://swapi.dev/api';
    _imgBase = 'https://starwars-visualguide.com/assets/img'
    GetAll = async (url) => {
        const res = await fetch(`${this._miniUrl}${url}`);
        if (!res.ok) {
            throw new Error('Hello')
        }
        return await res.json();
    }

    GetAllPeople = async () => {
        const res = await this.GetAll('/people/')
        return res.results.map(this._transformPerson)
    }

    GetPeople = async (id) => {
        const person = await this.GetAll(`/people/${id}`)
        return this._transformPerson(person)
    }

    GetAllPlanet = async () => {
        const res = await this.GetAll('/planets/')
        return res.results.map(this._transformPlanet)
    }

    GetPlanet = async (id) => {
        const planet = await this.GetAll(`/planets/${id}`)
        return this._transformPlanet(planet);
    }

    GetAllStarships = async () => {
        const res = await this.GetAll('/starships/')
        return res.results.map(this._transformStarship)
    }

    GetStarships = async (id) => {
        const starships = await this.GetAll(`/starships/${id}`)
        return this._transformStarship(starships)
    }

    getPersonImage = ({id}) => {
        return `${this._imgBase}/characters/${id}.jpg`
    }
    getStarshipImage = ({id}) => {
        return `${this._imgBase}/starships/${id}.jpg`
    }
    getPlanetImage = ({id}) => {
        return `${this._imgBase}/planets/${id}.jpg`
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotation_period: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birth_year: person.birth_year,
            eye_color: person.eye_color
        }
    }

}