import express, { urlencoded } from "express"

import { Routes } from "./interfaces/routes.interface"

export default class App {
  public app: express.Application
  public port: number

  constructor(routes: Routes[]) {
    this.app = express()
    this.port = 9090

    this.initializeMiddlewares()
    this.initializeRoutes(routes)
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

  public initializeRoutes(routes: Routes[]) {
    routes.forEach(route => this.app.use(`/`, route.router))
  }

  public initializeMiddlewares() {
    this.app.use(express.json())
    this.app.use(urlencoded({ extended: true }))
  }
}
