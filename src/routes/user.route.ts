import { Router } from "express"

import { Routes } from "../interfaces/routes.interface"
import UserController from "../controllers/user.controller"

export default class UserRoute implements Routes {
  public path = `/user`
  public router = Router()
  public userController = new UserController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.userController.save)
    this.router.get(`${this.path}`, this.userController.getAll)
  }
}
