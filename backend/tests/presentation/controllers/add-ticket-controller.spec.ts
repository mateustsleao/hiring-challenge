import { AddTicketController } from '@/presentation/controllers'
import { ValidationSpy, AddTicketSpy, mockRequest } from '@/tests/presentation/mocks'
import { badRequest, noContent, serverError } from '@/presentation/helpers'
import MockDate from 'mockdate'

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
    expect(addTicketSpy.params?.client).toEqual(httpRequest.body.client)
    expect(addTicketSpy.params?.issue).toEqual(httpRequest.body.issue)
    expect(addTicketSpy.params?.status).toEqual(httpRequest.body.status)
    expect(addTicketSpy.params?.deadline).toEqual(httpRequest.body.deadline)
  })

  test('should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.input).toEqual(httpRequest.body)
  })

  test('should return 500 if AddTicket throws', async () => {
    const { sut, addTicketSpy } = makeSut()
    jest.spyOn(addTicketSpy, 'add').mockImplementationOnce(() => { throw new Error() })
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('should return 400 if Validation fails', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error('any_field')
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })

  test('should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
