import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const ArrangementsTemplate = ({ title, content, contentComponent }) => {
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

ArrangementsTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

ArrangementsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const Arrangements = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ArrangementsTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

Arrangements.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Arrangements;

export const arrangementsPageQuery = graphql`
  query ArrangementsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
