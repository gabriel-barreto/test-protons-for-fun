import React from 'react';

import { useLoader } from '../../contexts';

import * as S from './styled';

export default function Loader() {
  const { state } = useLoader();
  return (
    <S.Overlay active={state}>
      <S.Spinner />
    </S.Overlay>
  );
}
