import { Request, Response, NextFunction } from "express"
import ProviderService from "../services/provider.service"

export default class ProviderController {
  public providerService = new ProviderService()

  public save = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const provider = req.body

      const { providerId } = await this.providerService.save({provider})

      res.status(201).json({ providerId })
    } catch (error) {
      next(error)
    }
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const providers = await this.providerService.getAll()

      res.status(200).json({providers})
    } catch (error) {
      next(error)
    }
  }
}
