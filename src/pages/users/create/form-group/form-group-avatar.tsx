import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import { ValidationError } from '../../../../utils/validation/types';
import * as S from './styles';

interface Props {
  label: string;
  placeholder: string;
  name: string;
  errors: ValidationError[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormGroupAvatar = ({
  value,
  label,
  placeholder,
  name,
  errors,
  onChange
}: Props) => {
  const { t } = useTranslation('users');

  const findError = (fieldName: string): string | undefined => errors.find(err => err.path === fieldName)?.message;

  return (
    <S.FormGroup>
      <S.FormGroupLabel>{label}</S.FormGroupLabel>
      <S.AvatarFieldWrapper>
        {value ? <S.AvatarImage src={value} alt={t('User avatar preview')} /> : <FontAwesomeIcon icon={faUser} />}
        <S.AvatarTextField
          name={name}
          type="file"
          placeholder={placeholder}
          helperText={findError('avatar')}
          error={!!findError('avatar')}
          onChange={onChange}
        />
      </S.AvatarFieldWrapper>
    </S.FormGroup>
  );
};
