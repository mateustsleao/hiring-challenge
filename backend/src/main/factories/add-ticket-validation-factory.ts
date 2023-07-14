import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { type Validation } from '@/validation/protocols'

export const makeAddTicketValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['client', 'issue', 'status', 'deadline']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
