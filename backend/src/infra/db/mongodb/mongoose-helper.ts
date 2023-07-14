import mongoose from 'mongoose'
export const MongooseHelper = {
  client: mongoose,
  async connect (uri: string, options?: mongoose.ConnectOptions | undefined): Promise<void> {
    await this.client.connect(uri, options)
  },
  async disconnect (): Promise<void> {
    await this.client.disconnect()
  },
  getModel (name: string): mongoose.Model<mongoose.Document> {
    return this.client.model(name)
  }
}
