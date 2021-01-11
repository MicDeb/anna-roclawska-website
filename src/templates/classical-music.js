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
    <section className='section section--gradient'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.arrangements') }`} />
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='section'>
              <h2 className='title is-size-3 has-text-weight-bold is-bold-light'>
                {title}
              </h2>
              <PageContent
                className='content'
                content={content}
              />
            </div>
          </div>
        </div>
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
