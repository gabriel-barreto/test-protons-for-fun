import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import notFoundIllustration from '../../assets/NotFoundIllustration.png';

import * as S from './styled';

function NotFoundIllustration({ actionLabel }) {
  const history = useHistory();

  const illustrationLabel = `O que você procurava não está mais aqui`;
  return (
    <S.Container>
      <S.Illustration
        alt={illustrationLabel}
        src={notFoundIllustration}
        title={illustrationLabel}
      />
      <S.Warning>Oops... Não encontrei o que você está procurando!</S.Warning>
      <S.Legend>
        Parece que o que você estava procurando não está mais aqui, reveja as
        informações e tente novamente...
      </S.Legend>
      {actionLabel ? (
        <S.Action onClick={() => history.go(-1)}>{actionLabel}</S.Action>
      ) : null}
    </S.Container>
  );
}

NotFoundIllustration.defaultProps = { actionLabel: '' };
NotFoundIllustration.propTypes = { actionLabel: PropTypes.string };

export default NotFoundIllustration;
