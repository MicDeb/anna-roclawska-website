import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const ClassicalMusicTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.arrangements') }`} />
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

ClassicalMusicTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

ClassicalMusicTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ClassicalMusic = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ClassicalMusicTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

ClassicalMusic.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ClassicalMusic;

export const classicalMusicPageQuery = graphql`
  query ClassicalMusic($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
