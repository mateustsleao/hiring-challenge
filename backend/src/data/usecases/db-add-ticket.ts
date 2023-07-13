import { type AddTicket } from '@/domain/usecases'
import { type AddTicketRepositoryParams, type AddTicketRepository } from '@/data/protocols'

export class DbAddTicket implements AddTicket {
  constructor (private readonly addTicketRepository: AddTicketRepository) { }

  async add (data: AddTicketRepositoryParams): Promise<void> {
    await this.addTicketRepository.add(data)
  }
}
