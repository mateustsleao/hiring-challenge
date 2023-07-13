import { AddTicketController, type AddTicketControllerRequest } from '@/presentation/controllers'
import { ValidationSpy, AddTicketSpy } from '@/tests/presentation/mocks'
import { badRequest, noContent, serverError } from '@/presentation/helpers'
import { faker } from '@faker-js/faker'

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
  addTicketSpy: AddTicketSpy

}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()

  const addTicketSpy = new AddTicketSpy()

  const sut = new AddTicketController(addTicketSpy, validationSpy)
  return {
    sut,
    validationSpy,
    addTicketSpy
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
    const { sut, addTicketSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(addTicketSpy.params).toEqual(httpRequest)
  })

  test('should return 500 if AddTicket throws', async () => {
    const { sut, addTicketSpy } = makeSut()
    jest.spyOn(addTicketSpy, 'add').mockImplementationOnce(() => { throw new Error() })
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('should return 400 if Validation fails', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })

  test('should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
