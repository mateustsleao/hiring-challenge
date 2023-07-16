import { type AddTicketParams, type AddTicket } from '@/domain/usecases'
import { type HttpRequest, type HttpResponse } from '@/presentation/protocols'
import { faker } from '@faker-js/faker'

export class AddTicketSpy implements AddTicket {
  params: AddTicketParams | undefined

  async add (params: AddTicketParams): Promise<void> {
    this.params = params
  }
}

export const mockRequest = (): HttpRequest => ({
  body: {
    client: faker.person.firstName(),
    issue: faker.lorem.sentence(),
    status: 'open',
    deadline: faker.date.soon()
  }
})

export const mockResponse = (): HttpResponse => ({
  statusCode: 200,
  body: {
    client: faker.person.firstName(),
    issue: faker.lorem.sentence(),
    status: 'open',
    deadline: faker.date.soon(),
    id: faker.datatype.uuid()
  }
})
