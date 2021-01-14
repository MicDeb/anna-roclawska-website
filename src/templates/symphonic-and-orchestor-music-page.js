import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const SymphonicAndOrchestorMusicPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.symphonic_and_orchestor_music') }`} />
      <div>
        <h2 className='page__main-title'>
          {title}
        </h2>
        <PageContent
          className='content'
          content={content}
        />
      </div>
    </section>
  );
};

SymphonicAndOrchestorMusicPageTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

SymphonicAndOrchestorMusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SymphonicAndOrchestorMusicPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <SymphonicAndOrchestorMusicPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

SymphonicAndOrchestorMusicPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SymphonicAndOrchestorMusicPage;

export const symphonicAndOrchestorMusicPageQuery = graphql`
  query SymphonicAndOrchestorMusicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
