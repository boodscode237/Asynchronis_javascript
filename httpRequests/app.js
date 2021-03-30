const getTodos = (resource, callback) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {

            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("error getting results");
            }

        });

        request.open('GET', resource);
        request.send();

    })

};
getTodos('json/luigi.json').then((data) => {
    console.log("promise 1 resolve: ", data)
    return getTodos('json/mario.json')
}).then(data => {
    console.log("promise 2 resolve: ", data)
    return getTodos('json/shaun.json')
}).then(data => {
    console.log("promise 3 resolved: ", data)
}).catch((error) => {
    console.log('rejection: ', error)
})

// promises 

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something
//         resolve('some data')
//         reject('some error')
//     });
// }

// getSomething().then((data) => {
//     console.log(data)
// }, (error) => {
//     console.log(error)
// })

// getSomething().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })