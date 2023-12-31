import { type AddTicket } from '@/domain/usecases/add-ticket'
import { type Controller, type HttpResponse, type HttpRequest } from '@/presentation/protocols'
import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { type Validation } from '@/validation/protocols'

export class AddTicketController implements Controller {
  constructor (
    private readonly addTicket: AddTicket,
    private readonly validation: Validation
  ) {
    this.addTicket = addTicket
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      const isError = error !== null && error !== undefined
      if (isError) {
        return badRequest(error)
      }
      await this.addTicket.add(httpRequest.body)
      return noContent()
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
