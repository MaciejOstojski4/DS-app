import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';
import { compile } from 'path-to-regexp';

import { ValidationError } from '../../../utils/validation/types';
import { validate } from '../../../utils/validation/validation';
import { userSet } from '../redux/usersSlice';
import { FORM_OBJECT_EMPTY } from './constants';
import { UserCreateFormObject } from './types';
import { validationSchema } from './validation-schema';
import { routes } from '../../../routing/routes';

export const useForm = () => {
  const dispatch = useDispatch();
  const [formObject, setFormObject] = useState<UserCreateFormObject>(FORM_OBJECT_EMPTY);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const navigate = useNavigate();

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
      const id = shortid.generate();
      dispatch(userSet({ ...formObject, id }));
      navigate(compile(routes.users.show)({ id }));
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
