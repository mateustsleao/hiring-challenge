import { AddTicketRepositorySpy } from '@/tests/data/mocks'
import { DbAddTicket } from '@/data/usecases'
import { mockAddTicketParams } from '@/tests/domain/mocks'

import MockDate from 'mockdate'

describe('DbAddTicket Usecase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  const makeSut = (): SutTypes => {
    const addTicketRepositorySpy = new AddTicketRepositorySpy()
    const sut = new DbAddTicket(addTicketRepositorySpy)
    return {
      sut,
      addTicketRepositorySpy
    }
  }

  interface SutTypes {
    sut: DbAddTicket
    addTicketRepositorySpy: AddTicketRepositorySpy
  }

  test('Should call AddTicketRepository with correct values', async () => {
    const { sut, addTicketRepositorySpy } = makeSut()
    const ticketData = mockAddTicketParams()
    await sut.add(ticketData)
    expect(addTicketRepositorySpy.params).toEqual(ticketData)
  })

  test('Should throw if AddTicketRepository throws', async () => {
    const { sut, addTicketRepositorySpy } = makeSut()
    jest.spyOn(addTicketRepositorySpy, 'add').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.add(mockAddTicketParams())
    await expect(promise).rejects.toThrow()
  })
})
