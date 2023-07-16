import { type AddTicketRepositoryParams, type AddTicketRepository } from '@/data/protocols/db'
import { TicketMongooseModel/*,  MongooseHelper */ } from '@/infra/db'
// import { type TicketModel } from '@/domain/models'

export class TicketMongoRepository implements AddTicketRepository {
  async add (data: AddTicketRepositoryParams): Promise<void> {
    const TicketModel = new TicketMongooseModel(data)
    await TicketModel.save()
    // console.log('result', result)
    // const resultMap = MongooseHelper.map(result)
    // console.log('resultMap', resultMap)
    // return resultMap
  }
}
