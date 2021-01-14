import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const ChoralMusicPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.choral_music') }`} />
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

ChoralMusicPageTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

ChoralMusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ChoralMusic = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ChoralMusicPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

ChoralMusic.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChoralMusic;

export const choralMusicPageQuery = graphql`
  query ChoralMusicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
