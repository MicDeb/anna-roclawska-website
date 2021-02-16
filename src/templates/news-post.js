import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Spring } from 'react-spring/renderprops';
import { useTranslation } from 'react-i18next';
import Content, { HTMLContent } from 'components/Content';
import Separator from 'components/Separator';

export const NewsPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  const { t } = useTranslation();

  return (
    <section className='news-post-template'>
      {helmet || ''}
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {(props) => (
          <h2
            style={props}
            className='page__main-title'
          >
            {t(title)}
          </h2>
        )}
      </Spring>
      <Separator margin={3} />
      <div className='wrapper container'>
        <p className='post-description'>{description}</p>
        <PostContent content={content} />
      </div>
    </section>
  );
};

NewsPostTemplate.defaultProps = {
  contentComponent: () => null,
  description: '',
  title: '',
  helmet: null,
};

NewsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const NewsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <NewsPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={(
        <Helmet titleTemplate='%s | Blog'>
          <title>{`Anna Rocławska - Musiałczyk | ${ post.frontmatter.title }`}</title>
          <meta
            name='description'
            content={`${ post.frontmatter.description }`}
          />
        </Helmet>
      )}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  );
};

NewsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default NewsPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
