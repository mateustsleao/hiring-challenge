import { makeAddTicketValidation, makeDbAddTicket } from '@/main/factories'
import { type Controller } from '@/presentation/protocols'
import { AddTicketController } from '@/presentation/controllers'
import { LogControllerDecorator } from '@/main/decorators'
import { LogErrorMongoRepository } from '@/infra/db/mongodb'

export const makeAddTicketController = (): Controller => {
  const controller = new AddTicketController(makeDbAddTicket(), makeAddTicketValidation())
  const logErrorRepository = new LogErrorMongoRepository()
  return new LogControllerDecorator(controller, logErrorRepository)
}
