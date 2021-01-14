import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const SoloMusicPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.solo_music') }`} />
      <div className='section'>
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

SoloMusicPageTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

SoloMusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SoloMusic = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <SoloMusicPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

SoloMusic.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SoloMusic;

export const soloMusicPageQuery = graphql`
  query SoloMusicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
