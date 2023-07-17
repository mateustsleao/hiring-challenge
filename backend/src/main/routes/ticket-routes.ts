import { adaptRoute } from '@/main/adapters'
import { type Router } from 'express'
import { makeAddTicketController, makeLoadTicketsController } from '@/main/factories'

export default (router: Router): void => {
  router.post('/tickets', adaptRoute(makeAddTicketController()))
  router.get('/tickets', adaptRoute(makeLoadTicketsController()))
}
