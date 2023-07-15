import { MongooseHelper as sut } from '@/infra/db/mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'
// import { mockAddTicketParams } from '@/tests/domain/mocks'

const makeDbStub = async (): Promise<string> => {
  const mongo = await MongoMemoryServer.create()
  return mongo.getUri()
}
const uri = makeDbStub()

describe('Mongoose Helper', () => {
  test('Should reconnect if mongodb is down', async () => {
    await sut.connect(await uri)
    expect(sut.client).toBeTruthy()
    await sut.disconnect()
    expect(sut.client).toBeFalsy()
    await sut.connect(await uri)
    expect(sut.client).toBeTruthy()
  })
  // test('Should map', async () => {
  //   const result = sut.map(mockAddTicketParams())
  //   expect(result).toEqual({
  //     id: 'any_id',
  //     title: 'any_title',
  //     description: 'any_description',
  //     body: 'any_body',
  //     userId: 'any_userId',
  //     createdAt: 'any_createdAt',
  //     updatedAt: 'any_updatedAt'
  //   })
  // })
  // test('Should return null if getModel fails', async () => {
  //   const result = sut.getModel('any_name')
  //   expect(result).toBeNull()
  // })
  // test('Should return a model if getModel succeeds', async () => {
  //   await sut.connect(uri)
  //   const result = sut.getModel('Ticket')
  //   expect(result).toBeTruthy()
  // })
})
