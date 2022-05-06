import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useMemo } from 'react';
import { ValidationError } from '../../../../utils/validation/types';
import { findError } from '../helpers';
import * as S from './styles';

interface Props {
  value: Date | null;
  label: string;
  placeholder: string;
  name: string;
  errors: ValidationError[];
  onChange: (date: Date | null) => void;
}

export const FormGroupDate = ({
  value,
  placeholder,
  name,
  errors,
  label,
  onChange
}: Props) => {
  const error = useMemo(() => findError(name, errors), [name, errors]);

  return (
    <S.FormGroup>
      <S.FormGroupLabel>{label}</S.FormGroupLabel>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          onChange={onChange}
          maxDate={new Date()}
          renderInput={(params) => (
            <TextField
              {...params}
              name={name}
              placeholder={placeholder}
              helperText={error}
              error={!!error}
            />
          )}
        />
      </LocalizationProvider>
    </S.FormGroup>
  );
};
