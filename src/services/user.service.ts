import mongoose from "mongoose"

import { UserModel, UserSchema } from "../models/user/user.model"

type SaveArgs = {
  user: typeof UserSchema
}
type SaveReturn = Promise<{
  userId: mongoose.Types.ObjectId,
}>

export default class UserService {
  public async getAll() {
    return await UserModel.find().exec()
  }

  public async save({ user }: SaveArgs): SaveReturn {
    const p = new UserModel({ user })
    await p.save()

    return { userId: p._id }
  }
}
