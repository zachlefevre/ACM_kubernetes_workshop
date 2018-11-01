express = require('express')
process = require('process')
port = 8080

const app = express()

app.get('/', (req, res)=> {
    console.log("req: ", req)
    res.status(200).send("<h1>CAPABILITY B</h1>\n<h2>V2</h2>")

})

app.get('/kill', (req, res) => {
    console.log(":(")
    res.status(200).send("<h1>I am ded</h1>")
    process.exit(0)
})


app.listen(port, () => {
    console.log('listening on: ', + port)
})
