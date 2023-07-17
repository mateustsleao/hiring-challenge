import { MongooseHelper as sut } from '@/infra/db'
import { MongoMemoryServer } from 'mongodb-memory-server'

describe('Mongoose Helper', () => {
  let mongoServer: MongoMemoryServer

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await sut.connect(mongoServer.getUri(), { dbName: 'notificationsDB' })
  })
  afterAll(async () => {
    await sut.disconnect()
    await mongoServer.stop()
  })

  test('Should reconnect if mongodb is down', async () => {
    await sut.connect(mongoServer.getUri())
    let ticketModel = sut.getModel('Ticket', mongoServer.getUri())
    expect(ticketModel).toBeTruthy()
    expect(sut.client).toBeTruthy()
    await sut.disconnect()
    expect(sut.client).toBeFalsy()
    await sut.connect(mongoServer.getUri())
    ticketModel = sut.getModel('Ticket', mongoServer.getUri())
    expect(ticketModel).toBeTruthy()
    expect(sut.client).toBeTruthy()
  })
})
