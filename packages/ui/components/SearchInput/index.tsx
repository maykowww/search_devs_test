import { SearchInputProps } from './model';
import { Container } from './styles';

export const SearchInput = ({ icon, onChange, ...props }: SearchInputProps) => {
  return (
    <Container {...props}>
      <img src={icon} alt="search icon" />
      <input type="text" {...props} onChange={onChange} />
    </Container>
  );
};
