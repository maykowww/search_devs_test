import styled from 'styled-components';
import { ButtonProps } from './model';

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ block }) => (block ? '100%' : 'fit-content')};
  background-color: var(--primary);
  padding: 10px 57.5px;
  height: 48px;
  border-radius: 6px;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--white);
`;
