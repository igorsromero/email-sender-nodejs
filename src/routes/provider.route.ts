import { Router } from "express"

import { Routes } from "../interfaces/routes.interface"
import ProviderController from "../controllers/provider.controller"

export default class ProviderRoute implements Routes {
  public path = `/provider`
  public router = Router()
  public providerController = new ProviderController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.providerController.save)
    this.router.get(`${this.path}`, this.providerController.getAll)
  }
}
