const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8080



app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json())

const notes = []


app.get('/', (req, res) => {
    res.send('Hello world')
})


app.get('/all-notes', (req, res) => {
    res.send(notes)
})

app.post('/create', (req, res) => {
    console.log('req body ', req.body)
    notes.push(req.body)
    return res.send(notes)
})

app.get('/detail/:id', (req, res) => {
    const detail = notes.find((item) => item.id === req.params.id)
    if(!detail){
        return res.status(400).send({message:'notes not found'})
    }

    res.send(detail)
})

app.listen(PORT, () => {
    try {
        console.log('server started')
    } catch (error) {
        console.log('Ошибка сервера ', error);
    }
})