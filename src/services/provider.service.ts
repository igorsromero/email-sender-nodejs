import { DocumentType } from "@typegoose/typegoose"
import mongoose from "mongoose"

import { Provider, ProviderModel, ProviderSchema } from "../models/provider/provider.model"

type SaveArgs = {
  provider: typeof ProviderSchema
}
type SaveReturn = Promise<{
  providerId: mongoose.Types.ObjectId,
}>

export default class ProviderService {
  public async getAll() {
    return await ProviderModel.find().exec()
  }

  public async save({ provider }: SaveArgs): SaveReturn {
    const newProvider = new ProviderModel(provider)
    console.log(newProvider)
    await newProvider.save()


    return {providerId: newProvider._id}
  }
}
