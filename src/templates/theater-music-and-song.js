import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const TheaterMusicAndSongsTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('navigation.arrangements') }`} />
      <div className='container'>
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

TheaterMusicAndSongsTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

TheaterMusicAndSongsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const TheaterMusicAndSongs = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <TheaterMusicAndSongsTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

TheaterMusicAndSongs.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TheaterMusicAndSongs;

export const theaterMusicAndSongsPageQuery = graphql`
  query TheaterMusicAndSongs($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
