// import { MongooseHelper } from '@/infra/db'
// import { setupApp } from '@/main/config/app'
// import { MongoMemoryServer } from 'mongodb-memory-server'
// import { type Express } from 'express'
// import request from 'supertest'
// import { faker } from '@faker-js/faker'

// let app: Express
// let mongoServer: MongoMemoryServer

// describe('Ticket Routes', () => {
//   beforeAll(async () => {
//     app = await setupApp()
//     mongoServer = await MongoMemoryServer.create()
//     await MongooseHelper.connect(mongoServer.getUri(), { dbName: 'notificationsDB' })
//   })

//   afterAll(async () => {
//     await MongooseHelper.disconnect()
//   })

//   beforeEach(async () => {
//     const TicketModel = MongooseHelper.getModel('Ticket')
//     await TicketModel.deleteMany({})
//   })

//   describe('POST /tickets', () => {
//     test('Should return 400 on add ticket without some required values', async () => {
//       await request(app)
//         .post('/api/tickets')
//         .send({
//           client: 'Ana',
//           issue: 'Issue',
//           status: 'open'
//         })
//         .expect(400)
//     })

//     test('Should return 200 on add ticket with all required values', async () => {
//       await request(app)
//         .post('/api/tickets')
//         .send({
//           client: 'Ana',
//           issue: 'Issue',
//           status: 'open',
//           deadline: faker.date.soon()
//         })
//         .expect(200)
//     })
//   })

//   describe('GET /tickets', () => {
//     test('Should return 400 on add ticket without some required values', async () => {
//       await request(app)
//         .get('/api/tickets')
//         .send({
//           client: 'Ana',
//           issue: 'Issue',
//           status: 'open'
//         })
//         .expect(400)
//     })

//     test('Should return 200 on add ticket with all required values', async () => {
//       await request(app)
//         .get('/api/tickets')
//         .send({
//           client: 'Ana',
//           issue: 'Issue',
//           status: 'open',
//           deadline: faker.date.soon()
//         })
//         .expect(200)
//     })
//   })
// })
