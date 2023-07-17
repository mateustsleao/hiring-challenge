import { type TicketModel } from '@/domain/models'

export interface LoadTicketsRepository {
  loadAll: () => Promise<LoadTicketsRepositoryResult>
}

export type LoadTicketsRepositoryResult = TicketModel[]
