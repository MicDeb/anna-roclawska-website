import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent } from 'components/Content';
import { MainTemplate } from 'components/MainTemplate';

const ActorsAndArtisticSong = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <MainTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      helmetTitle='navigation.arrangements'
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
