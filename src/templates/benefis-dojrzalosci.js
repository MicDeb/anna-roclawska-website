import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent } from 'components/Content';
import { MainTemplate } from 'components/MainTemplate';

const BenefisDojrzalosciPage = ({ data }) => {
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

BenefisDojrzalosciPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BenefisDojrzalosciPage;

export const benefisDojrzalosciPageQuery = graphql`
  query BenefisDojrzalosciPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
