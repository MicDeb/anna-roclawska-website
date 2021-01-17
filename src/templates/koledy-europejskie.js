import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const KoledyEuropejskiePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('bio') }`} />
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

KoledyEuropejskiePageTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

KoledyEuropejskiePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const KoledyEuropejskiePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <KoledyEuropejskiePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

KoledyEuropejskiePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default KoledyEuropejskiePage;

export const koledyEuropejskiePageQuery = graphql`
  query KoledyEuropejskiePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
