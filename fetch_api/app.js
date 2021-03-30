// async and await
fetch("json/luigi.json").then((res) => {
    console.log(res)
    return res.json() //make our response usable it = to json.parse
}).then(data => {
    console.log(data)
}).catch(e => {
    console.log(e)
})