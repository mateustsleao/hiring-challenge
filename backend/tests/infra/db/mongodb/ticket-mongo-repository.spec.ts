import { MongooseHelper, TicketMongoRepository } from '@/infra/db'
import { mockAddTicketParams } from '@/tests/domain/mocks'
import { mockMongo } from '@/tests/infra/db/mocks'

describe('Ticket Mongo Repository', () => {
  const mongoServer = mockMongo()
  const uri = mongoServer.then(res => res.getUri())

  beforeAll(async () => {
    await MongooseHelper.connect(await uri, { dbName: 'notificationsDB' })
  })

  afterAll(async () => {
    await MongooseHelper.disconnect()
    await (await mongoServer).stop()
  })

  beforeEach(async () => {
    const TicketModel = await MongooseHelper.getModel('Ticket', await uri)
    if (TicketModel === null) return
    await TicketModel?.deleteMany({})
  })

  const makeSut = (): TicketMongoRepository => {
    return new TicketMongoRepository()
  }

  test('Should return an ticket on add success', async () => {
    const sut = makeSut()
    const params = mockAddTicketParams()
    const result = await sut.add(params)
    expect(result).toBeTruthy()
    expect(result.id).toBeTruthy()
    expect(result.client).toBe(params.client)
    expect(result.status).toBe(params.status)
    expect(result.deadline).toStrictEqual(params.deadline)
  })
})
