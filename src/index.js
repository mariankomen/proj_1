
fetch('https://swapi.dev/api/people/1/')
    .then((res) => {
       return res.json();
    })
    .then((body) => {
        console.log(body)
    })