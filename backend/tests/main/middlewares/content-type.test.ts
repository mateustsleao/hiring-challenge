import { setupApp } from '@/main/config/app'
import { type Express } from 'express'
import request from 'supertest'

let app: Express

describe('Content Type Middleware', () => {
  beforeAll(async () => {
    app = await setupApp()
  })

  test('Should return default content type as json', async () => {
    app.get('/test_content_type', (req, res) => {
      res.send('')
    })
    await request(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })
})
