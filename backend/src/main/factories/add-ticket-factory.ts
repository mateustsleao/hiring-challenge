import { DbAddTicket } from '@/data/usecases'
import { type AddTicket } from '@/domain/usecases'
import { TicketMongoRepository } from '@/infra/db'

export const makeDbAddTicket = (): AddTicket => {
  const ticketMongoRepository = new TicketMongoRepository()
  return new DbAddTicket(ticketMongoRepository)
}
