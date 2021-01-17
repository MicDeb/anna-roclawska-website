import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent } from 'components/Content';
import { MainTemplate } from 'components/MainTemplate';

const ArtNVoicesLiveInProvencePage = ({ data }) => {
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

ArtNVoicesLiveInProvencePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ArtNVoicesLiveInProvencePage;

export const artNVoicesLiveInProvencePageQuery = graphql`
  query ArtNVoicesLiveInProvencePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
