import styled from 'styled-components';

import { Toggler } from './LoaderToggler';

export default styled.div`
  min-height: 18.4rem;
  width: 100%;
  > ${Toggler} {
    margin: 0 0 1rem 0;
    position: absolute;
  }
`;
