export default class SwapiService {
    _miniUrl = 'https://swapi.dev/api';

    async GetAll(url) {
        const res = await fetch(`${this._miniUrl}${url}`);
        if (!res.ok) {
            throw new Error('Hello')
        }
        return await res.json();
    }

    async GetAllPeople() {
        const res = await this.GetAll('/people/')
        return res.results.map(this._transformPerson)
    }

    async GetPeople(id) {
        const person = await this.GetAll(`/people/${id}`)
        return this._transformPerson(person)
    }

    async GetAllPlanet() {
        const res = await this.GetAll('/planets/')
        return res.results.map(this._transformPlanet)
    }

    async GetPlanet(id) {
        const planet = await this.GetAll(`/planets/${id}`)
        return this._transformPlanet(planet);
    }

    async GetAllStarships() {
        const res = await this.GetAll('/starships/')
        return res.results
    }

    async GetStarships(id) {
        const res = await this.GetAll(`/starships/${id}`)
        return res.results.map(this._transformStarship)
    }

    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet (planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformStarship(starship){
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.lendth,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }


}