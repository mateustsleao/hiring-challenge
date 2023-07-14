import { setupApp } from '@/main/config/app'
import { type Express } from 'express'
import request from 'supertest'
import { faker } from '@faker-js/faker'

let app: Express

describe('Body Parser Middleware', () => {
  beforeAll(async () => {
    app = await setupApp()
  })
  const name = faker.person.fullName()
  test('Should body parse as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name })
      .expect({ name })
  })
})
