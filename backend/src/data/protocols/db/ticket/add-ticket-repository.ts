import { type AddTicketParams } from '@/domain/usecases'

export interface AddTicketRepository {
  add: (data: AddTicketRepositoryParams) => Promise<AddTicketRepositoryResult>
}

export type AddTicketRepositoryParams = AddTicketParams
export type AddTicketRepositoryResult = boolean
