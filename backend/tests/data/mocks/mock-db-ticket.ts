import { type AddTicketRepository, type AddTicketRepositoryParams } from '@/data/protocols'

export class AddTicketRepositorySpy implements AddTicketRepository {
  params: AddTicketRepositoryParams | undefined

  async add (params: AddTicketRepositoryParams): Promise<void> {
    this.params = params
  }
}
