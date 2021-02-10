import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content from 'components/Content';
import Separator from 'components/Separator';
import { Spring } from 'react-spring/renderprops';

export const MainTemplate = ({
  title, content, contentComponent, helmetTitle,
}) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t(helmetTitle) }`} />
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {(props) => (
          <h2
            style={props}
            className='page__main-title'
          >
            {t(title)}
          </h2>
        )}
      </Spring>
      <Separator margin={3} />
      <div className='wrapper container'>
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
