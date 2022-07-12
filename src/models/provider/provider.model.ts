import { prop, getModelForClass } from "@typegoose/typegoose"

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
}

export const ProviderModel = getModelForClass(Provider)

export const ProviderSchema = {
  name: String,
  smtp: String,
  ssl: Boolean,
  tls: Boolean,
  authentication: Boolean,
  sslPort: Number,
  tlsPort: Number
}
