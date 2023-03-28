const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.sendFile('index.html',{
        root: __dirname
    })
})

app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('font-awesome'));
app.use(express.static('img'));

app.use((req, res) => {
    res.status(404).send('No se encontro tu pagina.......!!!')
    // res.end('No se encontro tu pagina ..........!!!')
})

app.listen(3000)
console.log(`Server on port ${3000}`)