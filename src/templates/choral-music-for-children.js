import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const ChoralMusicForChildrenPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.choral_music_for_children') }`} />
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

ChoralMusicForChildrenPageTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

ChoralMusicForChildrenPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ChoralMusicForChildren = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ChoralMusicForChildrenPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

ChoralMusicForChildren.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChoralMusicForChildren;

export const choralMusicForChildrenPageQuery = graphql`
  query ChoralMusicForChildrenPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
