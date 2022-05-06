import { TextField } from '@mui/material';
import { ValidationError } from '../../../../utils/validation/types';
import * as S from './styles';

interface Props {
  value: string;
  label: string;
  placeholder: string;
  name: string;
  errors: ValidationError[];
  multiline?: boolean;
  minRows?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormGroupInput = ({
  value,
  label,
  placeholder,
  name,
  errors,
  multiline,
  minRows,
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
        minRows={minRows}
        multiline={multiline}
        helperText={findError(name)}
        error={!!findError(name)}
        onChange={onChange}
      />
    </S.FormGroup>
  );
};
