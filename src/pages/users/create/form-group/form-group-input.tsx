import { TextField } from '@mui/material';
import { ValidationError } from '../../../../utils/validation/types';
import * as S from './styles';

interface Props {
  value: string;
  label: string;
  placeholder: string;
  name: string;
  errors: ValidationError[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormGroupInput = ({
  value,
  label,
  placeholder,
  name,
  errors,
  onChange
}: Props) => {

  const findError = (fieldName: string): string | undefined => errors.find(err => err.path === fieldName)?.message;

  return (
    <S.FormGroup>
      <S.FormGroupLabel>{label}</S.FormGroupLabel>
      <TextField
        name={name}
        placeholder={placeholder}
        value={value}
        helperText={findError('firstName')}
        error={!!findError('firstName')}
        onChange={onChange}
      />
    </S.FormGroup>
  );
};
