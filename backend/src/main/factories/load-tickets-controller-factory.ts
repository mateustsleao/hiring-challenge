import { makeDbLoadTickets } from '@/main/factories'
import { type Controller } from '@/presentation/protocols'
import { LoadTicketsController } from '@/presentation/controllers'
import { LogControllerDecorator } from '@/main/decorators'
import { LogErrorMongoRepository } from '@/infra/db/mongodb'

export const makeLoadTicketsController = (): Controller => {
  const controller = new LoadTicketsController(makeDbLoadTickets())
  const logErrorRepository = new LogErrorMongoRepository()
  return new LogControllerDecorator(controller, logErrorRepository)
}
