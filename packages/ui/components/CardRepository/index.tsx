import { Container } from './styles';
import starIcon from '@/assets/icons/star_icon.svg';
import { CardRepositoryProps } from './model';

export const CardRepository = ({
  name,
  html_url,
  description,
  stargazers_count,
  updated_at,
}: CardRepositoryProps) => {
  const formateDate = (date: Date) => {
    const currentDate = new Date();
    const differenceInSeconds = Math.floor(
      (currentDate.valueOf() - new Date(date).valueOf()) / 1000
    );
    const units = [
      { interval: 31536000, unit: 'anos' },
      { interval: 2592000, unit: 'meses' },
      { interval: 86400, unit: 'dias' },
      { interval: 3600, unit: 'horas' },
      { interval: 60, unit: 'minutos' },
    ];

    for (const { interval, unit } of units) {
      if (differenceInSeconds >= interval) {
        return `Atualizado há ${Math.floor(differenceInSeconds / interval)} ${unit}`;
      }
    }

    return `${Math.floor(differenceInSeconds)} segundos`;
  };

  return (
    <Container href={html_url} target={'_blank'}>
      <h1>{name}</h1>

      {description && <p>{description}</p>}

      <div className="info">
        <img src={starIcon} alt="" />
        <p>{stargazers_count}</p>
        <span></span>
        <p>{formateDate(updated_at!)}</p>
      </div>
    </Container>
  );
};
