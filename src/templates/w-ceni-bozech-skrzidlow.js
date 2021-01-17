import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent } from 'components/Content';
import { MainTemplate } from 'components/MainTemplate';

const WCeniBozechSkrzidlowPage = ({ data }) => {
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
