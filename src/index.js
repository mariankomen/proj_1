const getBody = async (url) => {
    const res = await fetch(url);
    const body = await res.json()
    return body;
}

getBody('https://swapi.dev/api/people/11/')
    .then((body)=>{
        console.log(body)
    })