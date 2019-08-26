import express from "express"

export class Server {
    private app: any
    constructor() {
        this.app = express()
        this.app.get("/", function(req, res) {
            res.set("Content-Type", "text/plain")
            res.send("Hello actions !")
        })

        this.app.listen(process.env.PORT, () => {
            console.log("Server running on port " + process.env.PORT)
        })
    }
}

const srv: Server = new Server()
