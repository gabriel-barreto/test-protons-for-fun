import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import defaultProps from './content';

function SEO({ description, meta, title }) {
  return (
    <Helmet
      htmlAttributes={{ lang: 'pt-br' }}
      title={`P4F | ${title}`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: '@gabrielgbarreto',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ].concat(meta)}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
      />
    </Helmet>
  );
}

SEO.defaultProps = defaultProps;
SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, content: PropTypes.string }),
  ),
};

export default SEO;
