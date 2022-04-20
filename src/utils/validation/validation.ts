import *  as yup from 'yup';

import { ValidationError } from './types';

export const validate = (formObject: any, validationSchema: yup.SchemaOf<any>): { isValid: boolean, errors: ValidationError[] } => {
  let isValid = true;
  let errors: ValidationError[] = [];
  try {
    validationSchema.validateSync(formObject, { abortEarly: false });
  } catch (err: any) {
    isValid = false;
    errors = err?.inner.map((e: ValidationError) => ({
      path: e.path,
      message: e.message,
    }));
  }
  return {
    isValid,
    errors
  };
};
