import PubSub from 'pubsub-js';
import styled from 'styled-components';

import { CONTEXT_TOPIC } from '../../contexts/loader.context';

let current = false;

export function toggle() {
  current = !current;
  PubSub.publish(CONTEXT_TOPIC, current);
}
export const Toggler = styled.button`
  background-color: #337ab7;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
  z-index: 9999;
`;
