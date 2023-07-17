import { ValidationComposite, RequiredFieldValidation, InvalidFieldValidation } from '@/validation/validators'
import { type Validation } from '@/validation/protocols'

export const makeAddTicketValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['client', 'issue', 'status', 'deadline']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new InvalidFieldValidation('status', ['open', 'closed']))
  return new ValidationComposite(validations)
}
