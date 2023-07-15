import mongoose from 'mongoose'

interface MongooseHelperType {
  client: mongoose.Mongoose | null
  connect: (uri: string, options?: mongoose.ConnectOptions | undefined) => Promise<void>
  disconnect: () => Promise<void>
  getModel: (name: string) => mongoose.Model<mongoose.Document> | null
  map: (collection: any) => any
}

const mongooseHelper: MongooseHelperType = {
  client: mongoose,
  async connect (uri, options): Promise<void> {
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
  getModel (name) {
    if (this.client === null) return null
    return this.client.model(name)
  },
  map: (collection) => {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}

export const MongooseHelper = mongooseHelper
