import { type AddTicketParams } from '@/domain/usecases'

export interface AddTicketRepository {
  add: (data: AddTicketRepositoryParams) => Promise<void>
}

export type AddTicketRepositoryParams = AddTicketParams
