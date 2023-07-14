import { adaptRoute } from '@/main/adapters'
import { makeAddTicketController } from '@/main/factories'
import { type Router } from 'express'

export default (router: Router): void => {
  router.post('/tickets', adaptRoute(makeAddTicketController()))
}
