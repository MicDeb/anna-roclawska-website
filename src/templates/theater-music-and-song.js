import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent } from 'components/Content';
import { MainTemplate } from 'components/MainTemplate';

const TheaterMusicAndSongs = ({ data }) => {
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
