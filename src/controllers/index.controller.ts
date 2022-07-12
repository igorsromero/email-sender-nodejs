import { Request, Response, NextFunction } from "express"

export default class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(200)
    } catch (error) {
      next(error)
    }
  }
}