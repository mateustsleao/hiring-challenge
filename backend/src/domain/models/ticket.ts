export interface TicketModel {
  id: string
  client: string
  issue: string
  status: 'open' | 'closed'
  deadline: Date
}
