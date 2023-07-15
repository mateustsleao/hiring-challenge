import { MongooseHelper as sut } from '@/infra/db/mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'
// import { mockAddTicketParams } from '@/tests/domain/mocks'

const makeDbStub = async (): Promise<string> => {
  const mongo = await MongoMemoryServer.create()
  return mongo.getUri()
  //  mockAddTicketParams()
}
const uri = makeDbStub()

describe('Mongoose Helper', () => {
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
