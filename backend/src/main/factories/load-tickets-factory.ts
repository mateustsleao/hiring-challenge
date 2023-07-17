import { DbLoadTickets } from '@/data/usecases'
import { type LoadTickets } from '@/domain/usecases'
import { TicketMongoRepository } from '@/infra/db'

export const makeDbLoadTickets = (): LoadTickets => {
  const ticketMongoRepository = new TicketMongoRepository()
  const dbLoadTickets = new DbLoadTickets(ticketMongoRepository)
  return dbLoadTickets
}
