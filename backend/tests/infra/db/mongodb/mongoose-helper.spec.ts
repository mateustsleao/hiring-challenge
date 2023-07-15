import { MongooseHelper as sut } from '@/infra/db'
import { mockMongo } from '@/tests/infra/db/mocks'

describe('Mongoose Helper', () => {
  const uri = mockMongo().then(mongoServer => mongoServer.getUri())

  beforeAll(async () => {
    await sut.connect(await uri)
  })
  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconnect if mongodb is down', async () => {
    await sut.connect(await uri)
    let ticketModel = sut.getModel('Ticket', await uri)
    expect(ticketModel).toBeTruthy()
    expect(sut.client).toBeTruthy()
    await sut.disconnect()
    expect(sut.client).toBeFalsy()
    await sut.connect(await uri)
    ticketModel = sut.getModel('Ticket', await uri)
    expect(ticketModel).toBeTruthy()
    expect(sut.client).toBeTruthy()
  })
})
