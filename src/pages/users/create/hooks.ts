import React, { useState } from 'react';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';
import { compile } from 'path-to-regexp';

import { ValidationError } from '../../../utils/validation/types';
import { validate } from '../../../utils/validation/validation';
import { userSet } from '../redux/usersSlice';
import { FORM_OBJECT_EMPTY } from './constants';
import { UserCreateFormObject } from './types';
import { validationFileSchema, validationSchema } from './validation-schema';
import { routes } from '../../../routing/routes';
import { useAppDispatch } from '../../../app/hooks';

export const useForm = () => {
  const dispatch = useAppDispatch();
  const [formObject, setFormObject] = useState<UserCreateFormObject>(FORM_OBJECT_EMPTY);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const navigate = useNavigate();

  const cleanForm = () => setFormObject(FORM_OBJECT_EMPTY);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const validateFile = (file: File): boolean => {
    const { isValid, errors: fileErrors } = validate({
      type: file.type,
      size: (file.size / (1024 * 1024)).toFixed(2)
    }, validationFileSchema);

    if (fileErrors) {
      setErrors([...errors, ...fileErrors.map(err => ({ ...err, path: 'avatar' }))]);
    }
    return isValid;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files?.length) {
      const file = files[0];
      const isValid = validateFile(file);

      if (isValid) {
        setErrors(errors.filter(err => err.path !== 'avatar'));
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setFormObject({ ...formObject, [name]: reader.result });
        };
      }
    }
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
    handleFileChange,
    handleDateChange,
    handleSubmit,
    cleanForm
  };
};
