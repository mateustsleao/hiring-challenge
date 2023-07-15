import { type AddTicketParams } from '@/domain/usecases'

export interface AddTicketRepository {
  add: (data: AddTicketRepositoryParams) => Promise<any>
}

export type AddTicketRepositoryParams = AddTicketParams
