import { Card } from 'react-bootstrap';

import styled from 'styled-components';

export const CardImageContainer = styled.div`
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
export const CardImage = styled(Card.Img)`
  width: 100%;
  cursor: pointer;
`;
