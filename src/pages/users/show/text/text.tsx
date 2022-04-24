import * as S from './styles';

interface Props {
  value?: string;
}

export const Text = ({ value }: Props) => {
  return (
    <S.Text>{value}</S.Text>
  );
};
