import { MongooseHelper, TicketMongoRepository } from '@/infra/db'
import { mockAddTicketParams, mockTicketModels } from '@/tests/domain/mocks'
import { MongoMemoryServer } from 'mongodb-memory-server'

const makeSut = (): TicketMongoRepository => {
  return new TicketMongoRepository()
}

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
  beforeEach(async () => {
    const TicketModel = await MongooseHelper.getModel('Ticket', mongoServer.getUri())
    if (TicketModel === null) return
    await TicketModel?.deleteMany({})
  })

  describe('Create Ticket Repository', () => {
    test('Should return an ticket on add success', async () => {
      const sut = makeSut()
      const params = mockAddTicketParams()
      await sut.add(params)
      const count = await (await MongooseHelper.getModel('Ticket', mongoServer.getUri()))?.countDocuments()
      expect(count).toBe(1)
    })
  })

  describe('Load Tickets Repository', () => {
    test('Should return an all tickets on load success', async () => {
      const addTicketModels = mockTicketModels
      const TicketModel = await MongooseHelper.getModel('Ticket', mongoServer.getUri())
      await TicketModel?.insertMany(addTicketModels)
      const sut = makeSut()
      const tickets = await sut.loadAll()
      const count = await (await MongooseHelper.getModel('Ticket', mongoServer.getUri()))?.countDocuments()
      expect(count).toEqual(addTicketModels.length)
      expect(tickets[0].client).toEqual(addTicketModels[1].client)
      expect(tickets[1].client).toEqual(addTicketModels[0].client)
    })
  })
})
