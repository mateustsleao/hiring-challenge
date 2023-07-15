import { type AddTicketRepositoryParams, type AddTicketRepository } from '@/data/protocols/db'
import { TicketMongooseModel, MongooseHelper } from '@/infra/db'
import { type TicketModel } from '@/domain/models'

export class TicketMongoRepository implements AddTicketRepository {
  async add (data: AddTicketRepositoryParams): Promise<TicketModel> {
    const TicketModel = new TicketMongooseModel(data)
    const result = await TicketModel.save()
    return MongooseHelper.map(result)
  }
}
