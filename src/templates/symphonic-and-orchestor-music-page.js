import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent } from 'components/Content';
import { MainTemplate } from 'components/MainTemplate';

const SymphonicAndOrchestorMusicPage = ({ data }) => {
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

SymphonicAndOrchestorMusicPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SymphonicAndOrchestorMusicPage;

export const symphonicAndOrchestorMusicPageQuery = graphql`
  query SymphonicAndOrchestorMusicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
