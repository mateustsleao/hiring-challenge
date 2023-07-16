import mongoose, { type Model, type Document } from 'mongoose'

const mongooseHelper = {
  client: null as mongoose.Mongoose | null,
  async connect (uri: string, options?: mongoose.ConnectOptions): Promise<void> {
    if (this.client === null) {
      this.client = mongoose
    }
    await this.client.connect(uri, options)
  },
  async disconnect (): Promise<void> {
    if (this.client === null) return

    await this.client.disconnect()
    this.client = null
  },
  async getModel<T extends Document> (name: string, uri: string): Promise<Model<T> | undefined> {
    if (this.client === null) {
      await this.connect(uri)
    }
    const moongoseModel = this.client?.model<T>(name)
    return moongoseModel ?? undefined
  },
  map (moongoseModel: any): any {
    const model = moongoseModel.toObject({
      versionKey: false,
      transform: (doc: any, ret: any) => {
        const { _id, ...docWithoutId } = ret
        return Object.assign({}, docWithoutId, { id: _id.toString() })
      }
    })
    return model
  }
}

export const MongooseHelper = mongooseHelper
