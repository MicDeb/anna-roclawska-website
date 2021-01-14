import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const TaperingTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.arrangements') }`} />
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

TaperingTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

TaperingTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const Tapering = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <TaperingTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

Tapering.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Tapering;

export const taperingPageQuery = graphql`
  query Tapering($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
