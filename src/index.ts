// import express from "express"

// export class Server {
//     private app: any
//     constructor() {
//         this.app = express()
//         this.app.get("/", function(req, res) {
//             res.set("Content-Type", "text/plain")
//             res.send("Hello actions !")
//         })

//         this.app.listen(3003, () => {
//             console.log(`Server running on port "http://localhost:3003"`)
//         })
//     }
// }

// const srv: Server = new Server()

let express = require("express")
let app = express()
let bodyParser = require("body-parser")
let port = 3003
const VERSION = process.env.npm_package_version

//parse application/json and look for raw text
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: "application/json" }))

app.get("/", function(req, res) {
    res.set("Content-Type", "text/plain")
    res.send(`Hello actions (v${VERSION})`)
})

app.listen(port, () => {
    console.log(`Server (v${VERSION}) running on port "http://localhost:3003"`)
})

module.exports = app // for testing
