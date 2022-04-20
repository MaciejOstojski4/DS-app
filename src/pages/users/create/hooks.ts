import React, { useState } from 'react';

import { FORM_OBJECT_EMPTY } from './constants';
import { UserCreateFormObject } from './types';

export const useForm = () => {
  const [formObject, setFormObject] = useState<UserCreateFormObject>(FORM_OBJECT_EMPTY);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleDateChange = (birthdate: Date | null) => {
    setFormObject({ ...formObject, birthdate });
  };

  return {
    formObject,
    handleInputChange,
    handleDateChange
  };
};
