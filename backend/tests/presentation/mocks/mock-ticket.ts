import { type AddTicketParams, type AddTicket } from '@/domain/usecases'

export class AddTicketSpy implements AddTicket {
  params: AddTicketParams | undefined

  async add (params: AddTicketParams): Promise<void> {
    this.params = params
  }
}
