import { type AddTicket } from '@/domain/usecases/add-ticket'
import { type Controller, type HttpResponse, type Validation } from '@/presentation/protocols'
import { badRequest, serverError, noContent } from '@/presentation/helpers'

export class AddTicketController implements Controller {
  constructor (
    private readonly addTicket: AddTicket,
    private readonly validation: Validation
  ) { }

  async handle (request: AddTicketControllerRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error !== null && error !== undefined) {
        return badRequest(error)
      }
      await this.addTicket.add(request)
      return noContent()
    } catch (error) {
      return serverError(error as Error)
    }
  }
}

export interface AddTicketControllerRequest {
  client: string
  issue: string
  status: string
  deadline: Date
}
