import { ButtonProps } from './model';
import { ButtonContainer } from './styles';

export const Button = ({ onClick, children, ...props }: ButtonProps) => {
  return (
    <ButtonContainer {...props} onClick={() => onClick!()} type="button">
      {children}
    </ButtonContainer>
  );
};
