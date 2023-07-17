import { MongooseHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'
import { type Express } from 'express'
import request from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'

import { faker } from '@faker-js/faker'

let mongoServer: MongoMemoryServer
let app: Express

describe('Ticket Routes', () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await MongooseHelper.connect(mongoServer.getUri(), { dbName: 'notificationsDB' })
    app = await setupApp()
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

  describe('POST /tickets', () => {
    test('should add a ticket with 204 status', async () => {
      await request(app)
        .post('/api/tickets')
        .send({
          client: 'John Doe',
          issue: 'My printer is on fire',
          status: 'open',
          deadline: new Date()
        })
        .expect(204)
    })
    test('should return 400 on add ticket without some required values', async () => {
      await request(app)
        .post('/api/tickets')
        .send({
          client: faker.person.fullName(),
          issue: faker.lorem.sentence(),
          status: 'open'
        })
        .expect(400)
    })
  })

  describe('GET /tickets', () => {
    test('should return 204 on get tickets with all values', async () => {
      await request(app)
        .get('/api/tickets')
        .send()
        .expect(204)
    })
  })
})
