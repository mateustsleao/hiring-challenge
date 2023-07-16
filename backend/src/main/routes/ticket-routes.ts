import { adaptRoute } from '@/main/adapters'
// import { makeAddTicketController } from '@/main/factories'
import { type Router } from 'express'
import { makeAddTicketController } from '@/main/factories'
export default (router: Router): void => {
  // router.post('/ticket', adaptRoute(makeAddTicketController()))
  router.post('/ticket', adaptRoute(makeAddTicketController()))
}
