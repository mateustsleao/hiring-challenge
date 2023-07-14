import { type AddTicketRepositoryResult, type AddTicketRepository, type AddTicketRepositoryParams } from '@/data/protocols'

export class AddTicketRepositorySpy implements AddTicketRepository {
  params: AddTicketRepositoryParams | undefined
  result = true

  async add (params: AddTicketRepositoryParams): Promise<AddTicketRepositoryResult> {
    this.params = params
    return this.result
  }
}
