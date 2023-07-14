import { makeAddTicketValidation, makeDbAddTicket } from '@/main/factories'
import { type Controller } from '@/presentation/protocols'
import { AddTicketController } from '@/presentation/controllers'

export const makeAddTicketController = (): Controller => {
  const controller = new AddTicketController(makeDbAddTicket(), makeAddTicketValidation())
  return controller
}
