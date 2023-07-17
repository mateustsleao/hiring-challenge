import { type LogErrorRepository } from '@/data'
import { MongooseHelper } from '@/infra/db'
import type mongoose from 'mongoose'
import { LogErrorMongoRepository } from '@/infra/db/mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

describe('Log Mongo Repository', () => {
  let mongoServer: MongoMemoryServer
  let ErrorModel: mongoose.Model<mongoose.Document> | undefined

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await MongooseHelper.connect(mongoServer.getUri(), { dbName: 'notificationsDB' })
  })

  afterAll(async () => {
    await MongooseHelper.disconnect()
    await mongoServer.stop()
  })

  beforeEach(async () => {
    ErrorModel = await MongooseHelper.getModel('LogError', mongoServer.getUri())
    if (ErrorModel === null) return
    await ErrorModel?.deleteMany({})
  })

  const makeSut = (): LogErrorRepository => {
    return new LogErrorMongoRepository()
  }

  test('Should create an error log on success', async () => {
    const sut = makeSut()
    await sut.logError('any_stack')
    const count = await (await MongooseHelper.getModel('LogError', mongoServer.getUri()))?.countDocuments()
    expect(count).toBe(1)
  })
})
