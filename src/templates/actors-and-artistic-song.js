import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const ActorsAndArtisticSongTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section className='section section--gradient'>
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

ActorsAndArtisticSongTemplate.defaultProps = {
  content: '',
  contentComponent: () => null,
};

ActorsAndArtisticSongTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ActorsAndArtisticSong = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ActorsAndArtisticSongTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

ActorsAndArtisticSong.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ActorsAndArtisticSong;

export const actorsAndArtisticSongPageQuery = graphql`
  query ActorsAndArtisticSong($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
