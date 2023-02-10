import { CardRepository } from 'components/CardRepository';
import { RepostoriesProps } from './model';
import { Container } from './styles';

export const Repositories = ({ repositories }: RepostoriesProps) => {
  return (
    <Container>
      {repositories.map((repo, index) => {
        return <CardRepository key={index} {...repo} />;
      })}
    </Container>
  );
};
