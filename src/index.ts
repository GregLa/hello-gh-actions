import express from "express"

export class Server {
    private app: any
    constructor() {
        this.app = express()
        this.app.get("/", function(req, res) {
            res.set("Content-Type", "text/plain")
            res.send("Hello actions !")
        })

        this.app.listen(3003, () => {
            console.log(`Server running on port "http://localhost:3003"`)
        })
    }
}

const srv: Server = new Server()
