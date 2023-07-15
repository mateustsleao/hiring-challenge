import mongoose from 'mongoose'

interface MongooseHelperType {
  client: mongoose.Mongoose | null
  connect: (uri: string, options?: mongoose.ConnectOptions | undefined) => Promise<void>
  disconnect: () => Promise<void>
  getModel: (name: string, uri: string) => Promise<void>
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
  async getModel (name, uri) {
    if (this.client === null) await this.connect(uri)
    this.client?.model(name)
  }
}

export const MongooseHelper = mongooseHelper
