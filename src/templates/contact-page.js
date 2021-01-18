import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent } from 'components/Content';
import { ContactTemplate } from 'components/ContactTemplate';

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactTemplate
      contentComponent={HTMLContent}
      content={post.html}
      helmetTitle='navigation.contact'
    />
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
