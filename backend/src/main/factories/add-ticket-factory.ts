import { DbAddTicket } from '@/data/usecases'
import { type AddTicket } from '@/domain/usecases'
import { TicketMongoRepository } from '@/infra/db'

export const makeDbAddTicket = (): AddTicket => {
  const ticketMongoRepository = new TicketMongoRepository()
  const dbAddTicket = new DbAddTicket(ticketMongoRepository)
  console.log('dbAddTicket', dbAddTicket)
  return dbAddTicket
}
