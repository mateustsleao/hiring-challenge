import { type Controller, type HttpResponse } from '@/presentation/protocols'
import { noContent, serverError, ok } from '@/presentation/helpers'
import { type LoadTickets } from '@/domain/usecases'

export class LoadTicketsController implements Controller {
  constructor (private readonly loadTickets: LoadTickets) { }

  async handle (): Promise<HttpResponse> {
    try {
      const tickets = await this.loadTickets.load()
      return (tickets.length > 0) ? ok(tickets) : noContent()
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
