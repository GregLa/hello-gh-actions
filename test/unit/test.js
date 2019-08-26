let chai = require("chai")
let expect = chai.expect
let chaiHttp = require("chai-http")
let server = "http://localhost:3003"
// let app = require("../../dist/index")

chai.use(chaiHttp)
describe("API", function() {
    describe("GET '/'", function() {
        it("status 200", (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    done()
                })
        })
        it("content", (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    expect(res.text).to.eq("Hello actions !")
                    done()
                })
        })
    })
})
