import React, { useState } from 'react';

import { ValidationError } from '../../../utils/validation/types';
import { validate } from '../../../utils/validation/validation';
import { FORM_OBJECT_EMPTY } from './constants';
import { UserCreateFormObject } from './types';
import { validationSchema } from './validation-schema';

export const useForm = () => {
  const [formObject, setFormObject] = useState<UserCreateFormObject>(FORM_OBJECT_EMPTY);
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const cleanForm = () => setFormObject(FORM_OBJECT_EMPTY);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleDateChange = (birthdate: Date | null) => {
    setFormObject({ ...formObject, birthdate });
  };

  const handleSubmit = () => {
    const { isValid, errors } = validate(formObject, validationSchema);
    if (errors.length) setErrors(errors);
    if (isValid) {
      setErrors([]);
    }
  };

  return {
    formObject,
    errors,
    handleInputChange,
    handleDateChange,
    handleSubmit,
    cleanForm
  };
};
