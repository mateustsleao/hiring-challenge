import { type AddTicketRepositoryParams, type AddTicketRepository, type LoadTicketsRepositoryResult } from '@/data/protocols/db'
import { MongooseHelper, TicketMongooseModel } from '@/infra/db'

export class TicketMongoRepository implements AddTicketRepository {
  async add (data: AddTicketRepositoryParams): Promise<void> {
    const TicketModel = new TicketMongooseModel(data)
    await TicketModel.save()
  }

  async loadAll (): Promise<LoadTicketsRepositoryResult> {
    const tickets = await TicketMongooseModel.find().sort({ deadline: -1 })
    return tickets.map(ticket => MongooseHelper.map(ticket))
  }
}
