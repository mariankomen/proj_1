export default class SwapiService {
    _miniUrl = 'https://swapi.dev/api';
    async GetAll(url){
        const res = await fetch(`${this._miniUrl}${url}`);
        if(!res.ok){
            throw new Error('Hello')
        }
        return await res.json();
    }

    async GetAllPeople(){
        const res = await this.GetAll('/people/')
        return res.results
    }
    GetPeople(id){
        return this.GetAll(`/people/${id}`)
    }
    async GetAllPlanet(){
        const res = await this.GetAll('/planets/')
        return res.results
    }
    GetPlanet(id){
        return this.GetAll(`/planets/${id}`)
    }
    async GetAllStarships(){
        const res = await this.GetAll('/starships/')
        return res.results
    }
    GetStarships(id){
        return this.GetAll(`/starships/${id}`)
    }
}