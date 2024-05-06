const express = require("express")
const path = require("path")
const bodyParser = require('body-parser');

require("dotenv").config()

const Mailjet = require('node-mailjet');
const { STATUS_CODES } = require("http");

const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC || 'your-api-key',
    apiSecret: process.env.MJ_APIKEY_PRIVATE || 'your-api-secret'
});

const server = express()

server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT | 3000;

server.get("/", (req, res) => {
    console.log("GET ZPAROS")
    res.sendFile(path.join(__dirname, "index.html"))
})

server.post("/", (req, res) => {
    console.log(req)
    const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: "gurastas11@gmail.com",
                        Name: "ДопомогаKDPU"
                    },
                    To: [
                        {
                            Email: "tachantil15@gmail.com",
                            Name: "stas"
                        }
                    ],
                    Subject: "Новая заявка",
                    TextPart: ``,
                    HTMLPart: `<p>Имя: ${req.body.name}</p><p>Почта: ${req.body.email}</p><p>Телефон: ${req.body.phone}</p>`
                }
            ]
        })

    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            if (err) console.log(err.statusCode)
        })

    res.sendFile(path.join(__dirname, "index.html"))
})

server.listen(port, () => {
    console.log(`server listen on ${port} port`)
})