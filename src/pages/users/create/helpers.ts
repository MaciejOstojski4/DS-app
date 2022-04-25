import { ValidationError } from '../../../utils/validation/types';

export const findError = (fieldName: string, errors: ValidationError[]): string | undefined => {
  return errors.find(err => err.path === fieldName)?.message;
}; 
