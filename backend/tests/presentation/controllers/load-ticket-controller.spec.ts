import { LoadTicketsController } from '@/presentation/controllers'
import { ok, serverError, noContent } from '@/presentation/helpers'
import { LoadTicketsSpy } from '@/tests/presentation/mocks'
import { throwError } from '@/tests/domain/mocks'

import MockDate from 'mockdate'

interface SutTypes {
  sut: LoadTicketsController
  loadTicketsSpy: LoadTicketsSpy
}

const makeSut = (): SutTypes => {
  const loadTicketsSpy = new LoadTicketsSpy()
  const sut = new LoadTicketsController(loadTicketsSpy)
  return {
    sut,
    loadTicketsSpy
  }
}

describe('LoadTickets Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should return 200 on success', async () => {
    const { sut, loadTicketsSpy } = makeSut()
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(ok(loadTicketsSpy.result))
  })

  test('Should return 204 if LoadTickets returns empty', async () => {
    const { sut, loadTicketsSpy } = makeSut()
    loadTicketsSpy.result = []
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(noContent())
  })

  test('Should return 500 if LoadTickets throws', async () => {
    const { sut, loadTicketsSpy } = makeSut()
    jest.spyOn(loadTicketsSpy, 'load').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
