import { type LoadTickets } from '@/domain/usecases'
import { type LoadTicketsRepositoryResult, type LoadTicketsRepository } from '@/data/protocols'

export class DbLoadTickets implements LoadTickets {
  constructor (private readonly loadTicketsRepository: LoadTicketsRepository) { }

  async load (): Promise<LoadTicketsRepositoryResult> {
    return await this.loadTicketsRepository.loadAll()
  }
}
