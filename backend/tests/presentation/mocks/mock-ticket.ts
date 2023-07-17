import { type AddTicketParams, type AddTicket, type LoadTickets, type LoadTicketsResult } from '@/domain/usecases'
import { type HttpRequest, type HttpResponse } from '@/presentation/protocols'
import { faker } from '@faker-js/faker'
import { mockTicketModels } from '@/tests/domain/mocks'

export class AddTicketSpy implements AddTicket {
  params: AddTicketParams | undefined

  async add (params: AddTicketParams): Promise<void> {
    this.params = params
  }
}

export class LoadTicketsSpy implements LoadTickets {
  result = mockTicketModels

  async load (): Promise<LoadTicketsResult> {
    return this.result
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
    id: faker.string.uuid()
  }
})
