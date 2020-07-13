import { Badge } from 'react-bootstrap';
import styled from 'styled-components';

export const TypeButton = styled(Badge).attrs(props => ({
  className: props.className,
}))`
  background: ${props => `${props.type.background}`};
  color: ${props => `${props.type.color}`};

  border: none;
`;
