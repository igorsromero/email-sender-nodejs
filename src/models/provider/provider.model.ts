import { prop, getModelForClass } from "@typegoose/typegoose"
import mongoose from "mongoose"

export class Provider {
  @prop({ type: String, required: true, trim: true })
  name: string

  @prop({ type: String, required: true, trim: true })
  smtp: string

  @prop({ type: Boolean, required: true })
  ssl: boolean

  @prop({ type: Boolean, required: true })
  tls: boolean

  @prop({ type: Boolean, required: true })
  authentication: boolean

  @prop({ type: Number, required: true})
  sslPort: number

  @prop({ type: Number, required: true})
  tlsPort: number
  
  @prop({ type: Boolean, required: true })
  default: boolean

  @prop({ type: mongoose.Schema.Types.ObjectId, ref: "User", required: false})
  user: mongoose.Schema.Types.ObjectId
}

export const ProviderModel = getModelForClass(Provider)

export const ProviderSchema = {
  name: String,
  smtp: String,
  ssl: Boolean,
  tls: Boolean,
  authentication: Boolean,
  sslPort: Number,
  tlsPort: Number,
  default: Boolean,
  user: mongoose.Schema.Types.ObjectId,
}
