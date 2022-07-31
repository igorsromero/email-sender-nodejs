import { Request, Response, NextFunction } from "express"

import UserService from "../services/user.service"

export default class UserController {
  public userService = new UserService()

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.getAll()

      res.status(200).json({ users })
    } catch (error) {
      next(error)
    }
  }

  public save = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body
      const { userId } = await this.userService.save({ name, email, password })

      res.status(201).json({ userId })
    } catch (error) {
      next(error)
    }
  }
}
