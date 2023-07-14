import { type AddTicketRepositoryParams, type AddTicketRepository, type AddTicketRepositoryResult } from '@/data/protocols/db/ticket'
import { TicketMongooseModel } from '@/infra/db/mongoose'
import { type Document, type SaveOptions } from 'mongoose'

export class TicketMongoRepository implements AddTicketRepository {
  async add (data: AddTicketRepositoryParams & SaveOptions): Promise<AddTicketRepositoryResult> {
    const TicketModel = new TicketMongooseModel(data)
    const result = await TicketModel.save()
    const hasResult = this.hasResult(result)
    return hasResult
  }

  private hasResult (result: Document): boolean {
    return result?._id !== undefined
  }
}
