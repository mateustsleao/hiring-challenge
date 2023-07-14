import { makeAddTicketValidation } from '@/main/factories'
import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { type Validation } from '@/validation/protocols'

jest.mock('@/validation/validators/validation-composite')

describe('AddTicketValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeAddTicketValidation()
    const validations: Validation[] = []
    for (const field of ['client', 'issue', 'status', 'deadline']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
