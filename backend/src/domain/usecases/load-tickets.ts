import { type TicketModel } from '@/domain/models'

export interface LoadTickets {
  load: () => Promise<LoadTicketsResult>
}

export type LoadTicketsResult = TicketModel[]
