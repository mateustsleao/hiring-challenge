import { faker } from '@faker-js/faker'
import { type AddTicketParams } from '@/domain/usecases'

export const mockAddTicketParams = (): AddTicketParams => ({
  client: faker.person.fullName(),
  issue: faker.lorem.sentence(),
  status: 'open',
  deadline: faker.date.soon()
})
