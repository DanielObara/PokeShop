import { Badge } from 'react-bootstrap';
import styled from 'styled-components';
import TYPES_THEME from '../../utils/Types';

export const TypeButton = styled(Badge)`
  background: ${props => `${TYPES_THEME[props.type].background}`};
  color: ${props => `${TYPES_THEME[props.type].color}`};

  border: none;
`;
