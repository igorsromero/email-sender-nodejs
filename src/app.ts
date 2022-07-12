import express from "express"

export default class App {
  public app: express.Application
  public port: number

  constructor() {
    this.app = express()
    this.port = 9090
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`======================================`)
      console.log(`App listening on the port ${this.port}`)
      console.log(`======================================`)
    })
  }

  public getServer() {
    return this.app
  }
}