import { AddTicketController, type AddTicketControllerRequest } from '@/presentation/controllers'
import { faker } from '@faker-js/faker'
import { ValidationSpy, AddTicketSpy } from '@/tests/presentation/mocks'

import MockDate from 'mockdate'

const mockRequest = (): AddTicketControllerRequest => ({
  client: faker.person.firstName(),
  issue: faker.lorem.sentence(),
  status: 'open',
  deadline: faker.date.soon()
})

interface SutTypes {
  sut: AddTicketController
  validationSpy: ValidationSpy
  addTicketStub: AddTicketSpy

}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()

  const addTicketStub = new AddTicketSpy()

  const sut = new AddTicketController(addTicketStub, validationSpy)
  return {
    sut,
    validationSpy,
    addTicketStub
  }
}

describe('AddTicketController', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('should call AddTicket with correct values', async () => {
    const { sut, addTicketStub } = makeSut()
    const httpRequest = mockRequest()
    sut.handle(httpRequest)
    expect(addTicketStub.params).toEqual(httpRequest)
  })
}
)
