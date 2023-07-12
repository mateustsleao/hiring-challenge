import { type TicketModel } from '@/domain/models'

export interface AddTicket {
  add: (params: AddTicketParams) => TicketModel
}

export type AddTicketParams = Omit<TicketModel, 'id'>
