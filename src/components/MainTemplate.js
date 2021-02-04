import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content from 'components/Content';
import Separator from 'components/Separator';

export const MainTemplate = ({
  title, content, contentComponent, helmetTitle,
}) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t(helmetTitle) }`} />
      <div className='wrapper container'>
        <h2 className='page__main-title'>
          {t(title)}
        </h2>
        <Separator margin={3} />
        <PageContent
          className='content'
          content={content}
        />
      </div>
    </section>
  );
};

MainTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
  helmetTitle: '',
};

MainTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  helmetTitle: PropTypes.string,
};
