require("dotenv").config()

const express = require("express")

const port = process.env.PORT

const server = express()

server.listen(port , () => {console.log(`server port ${port}`);})

const items = [
    {id :1 , product: "pro1"},
    {id :2 , product: "pro2"}
]

/* getting the items */
server.get('/items', (req, res) => {
    res.status(200).json(items)
})

/* adding one item */

server.post('/items', (req, res) => {
    console.log(req);
    /* res.status(201).json() */
    res.end()
})