import {getModelForClass, prop} from "@typegoose/typegoose"

export class User { 
  @prop({type: String, required: true, trim: true})
  name: string

  @prop({type: String, required: true, trim: true})
  email: string
  
  @prop({type: String, required: true, trim: true})
  password: string
}

export const UserModel = getModelForClass(User)

export const UserSchema = {
  name: String,
  email: String,
  password: String
}
