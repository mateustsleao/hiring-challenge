import { mockAddTicketParams } from '@/tests/domain/mocks'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { MongooseHelper, TicketMongoRepository } from '@/infra/db/mongodb'

describe('Ticket Mongo Repository', () => {
  let mongoServer: MongoMemoryServer

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await MongooseHelper.connect(mongoServer.getUri(), { dbName: 'notificationsDB' })
  })

  afterAll(async () => {
    await MongooseHelper.disconnect()
    await mongoServer.stop()
  })

  const makeSut = (): TicketMongoRepository => {
    return new TicketMongoRepository()
  }

  test('Should return an ticket on add success', async () => {
    const sut = makeSut()
    const isValid = await sut.add(mockAddTicketParams())
    expect(isValid).toBe(true)
  })
})
