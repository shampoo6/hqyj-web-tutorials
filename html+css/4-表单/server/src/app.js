let express = require('express')
let path = require('path')
let app = express()
let port = 1024

app.use('/', express.static(path.join(__dirname, '../public')))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/myGet', (req, res) => {
    console.log(req.query)
    res.json(req.query)
})

app.post('/myGet', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(port, () => {
    console.log('server start on: http://127.0.0.1:' + port)
})