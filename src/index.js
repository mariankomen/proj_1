const getBody = async (url) => {
    const res = await fetch(url);
    if(!res.ok) {
        throw new Error(`Error could not get data from ${url}, we get status: ${res.status} `)
    }
    const body = await res.json()
    return body;
}

getBody('https://swapi.dev/api/people/21111/')
    .then((body)=>{
        console.log(body)
    })
    .catch((err) => {
        console.error('Could not fetch: ', err)
    })