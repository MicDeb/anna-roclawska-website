import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const WCeniBozechSkrzidlowPageTemplate = ({ title, content, contentComponent }) => {
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

WCeniBozechSkrzidlowPageTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

WCeniBozechSkrzidlowPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const WCeniBozechSkrzidlowPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <WCeniBozechSkrzidlowPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

WCeniBozechSkrzidlowPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WCeniBozechSkrzidlowPage;

export const wCeniBozechSkrzidlowPageQuery = graphql`
  query WCeniBozechSkrzidlowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
