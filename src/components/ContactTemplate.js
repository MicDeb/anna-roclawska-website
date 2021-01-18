import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content from 'components/Content';

export const ContactTemplate = ({ content, contentComponent, helmetTitle }) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section className='contact__container'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t(helmetTitle) }`} />
      <PageContent
        className='content'
        content={content}
      />
    </section>
  );
};

ContactTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
  helmetTitle: '',
};

ContactTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  helmetTitle: PropTypes.string,
};
