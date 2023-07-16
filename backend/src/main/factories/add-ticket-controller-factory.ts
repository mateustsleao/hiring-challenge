import { makeAddTicketValidation, makeDbAddTicket } from '@/main/factories'
import { type Controller } from '@/presentation/protocols'
import { AddTicketController } from '@/presentation/controllers'
import { LogControllerDecorator } from '@/main/decorators'

export const makeAddTicketController = (): Controller => {
  const controller = new AddTicketController(makeDbAddTicket(), makeAddTicketValidation())
  return new LogControllerDecorator(controller)
}
