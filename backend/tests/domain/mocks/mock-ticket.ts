import { faker } from '@faker-js/faker'
import { type AddTicketParams } from '@/domain/usecases'
import { type TicketModel } from '../models'

export const mockAddTicketParams = (): AddTicketParams => ({
  client: faker.person.fullName(),
  issue: faker.lorem.sentence(),
  status: 'open',
  deadline: faker.date.soon()
})

const mockTicketModelSoon: TicketModel = {
  id: faker.string.uuid(),
  client: faker.person.fullName(),
  issue: faker.lorem.sentence(),
  status: 'open',
  deadline: faker.date.soon()
}

const mockTicketModelPast: TicketModel = {
  id: faker.string.uuid(),
  client: faker.person.fullName(),
  issue: faker.lorem.sentence(),
  status: 'open',
  deadline: faker.date.past()
}

export const mockTicketModels: TicketModel[] = [mockTicketModelPast, mockTicketModelSoon]
