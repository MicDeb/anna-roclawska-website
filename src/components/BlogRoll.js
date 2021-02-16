import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import PreviewCompatibleImage from './PreviewCompatibleImage';

function BlogRoll(props) {
  const { t } = useTranslation();
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <>
      {posts && posts.map(({ node: post }) => (
        <div
          className='col-xs-12 col-md-6 col-lg-4'
          key={post.id}
        >
          <article
            className={`news-list-item ${
              post.frontmatter.featuredpost ? 'is-featured' : ''
            }`}
          >
            <header>
              {post.frontmatter.featuredimage ? (
                <div className='featured-thumbnail'>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${ post.frontmatter.title }`,
                    }}
                  />
                </div>
              ) : null}
              <div className='post-meta'>
                <p>
                  <Link
                    className='title'
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                </p>

                <p className='subtitle'>
                  {post.frontmatter.date}
                </p>
              </div>
            </header>
            <div>
              <p className='excerpt'>
                {post.excerpt}
              </p>
              <Link
                className='show-more-button'
                to={post.fields.slug}
              >
                {t('read_more')}
              </Link>
            </div>
          </article>
        </div>
      ))}
    </>
  );
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => (
      <BlogRoll
        data={data}
        count={count}
      />
    )}
  />
);
