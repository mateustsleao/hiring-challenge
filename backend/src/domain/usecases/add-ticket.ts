import { type TicketModel } from '@/domain/models'

export interface AddTicket {
  add: (params: AddTicketParams) => Promise<void>
}

export type AddTicketParams = Omit<TicketModel, 'id'>
