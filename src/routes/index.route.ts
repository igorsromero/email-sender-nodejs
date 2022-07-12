import { Router } from "express"

import { Routes } from "../interfaces/routes.interface"
import IndexController from "../controllers/index.controller"

export default class IndexRoute implements Routes {
  public path = `/`
  public router = Router()
  public indexController = new IndexController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index)
  }
}
