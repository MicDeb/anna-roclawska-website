import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const ChamberMusicPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.chamber_music') }`} />
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

ChamberMusicPageTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

ChamberMusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ChamberMusic = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ChamberMusicPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

ChamberMusic.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChamberMusic;

export const chamberMusicPageQuery = graphql`
  query ChamberMusicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
