import { IconTextProps } from './model';
import { Container } from './styles';

export const IconText = ({ icon, text, ...props }: IconTextProps) => {
  return (
    <Container {...props}>
      <img src={icon} alt="" />
      <p>{text}</p>
    </Container>
  );
};
