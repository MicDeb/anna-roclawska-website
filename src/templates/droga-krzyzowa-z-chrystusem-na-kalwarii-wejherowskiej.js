import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent } from 'components/Content';
import { MainTemplate } from 'components/MainTemplate';

const DrogaKrzyzowaZChrystusemNaKalwariiWejherowskiejPage = ({ data }) => {
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

DrogaKrzyzowaZChrystusemNaKalwariiWejherowskiejPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DrogaKrzyzowaZChrystusemNaKalwariiWejherowskiejPage;

export const drogaKrzyzowaZChrystusemNaKalwariiWejherowskiejPageQuery = graphql`
  query DrogaKrzyzowaZChrystusemNaKalwariiWejherowskiejPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
