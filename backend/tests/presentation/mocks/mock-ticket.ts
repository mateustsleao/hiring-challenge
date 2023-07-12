import { type TicketModel } from '@/domain/models'
import { type AddTicketParams, type AddTicket } from '@/domain/usecases'
import { faker } from '@faker-js/faker'

export class AddTicketSpy implements AddTicket {
  params: AddTicketParams | undefined

  add (params: AddTicketParams): TicketModel {
    this.params = params
    return {
      id: faker.string.uuid(),
      client: faker.person.firstName(),
      issue: faker.lorem.sentence(),
      status: 'open',
      deadline: faker.date.soon()
    }
  }
}
