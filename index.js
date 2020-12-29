const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var users = []
app.get("/",(req,res) => {
    res.send(users)
} )

app.post("/newuser",(req,res) => {
    users.push(req.body)
    res.json(users)
})

app.put("/update/:name",(req,res) => {
    users.forEach(item => {
        if(item.name === req.params.name)
        {
            item.name = req.body.name
            item.contact = req.body.contact
        }
    })
    res.json(users)
})

app.delete("/delete/:name",(req,res) => {
    users.forEach((item,index) => {
        if(item.name === req.params.name)
        {
            users.splice(index,1)
        }
    })
    res.json(users)
})

app.listen(8080)