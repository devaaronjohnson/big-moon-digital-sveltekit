export async function getData({ query, variables }) {
  const endpoint = 'https://api.bigmoondigital.io/graphql';

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables })
    });

    return {
      status: result.status,
      body: await result.json()
    };
  } catch {
    return {
      status: 500,
      error: 'Error receiving data'
    };
  }
}

export async function getBlogPosts() {
  return getData({
    query: `
    query getBlogPosts {
      posts {
        edges {
          node {
            content
            slug
            title
            date
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `,
    variables: {}
  });
}

export async function getPost(slug) {
  return getData({
    query: `
    query getPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        slug
        title
        status
        seo {
          metaDesc
          title
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        content
        categories {
          nodes {
            name
          }
        }
        date
      }
    }
    `,
    variables: {
      id: slug
    }
  });
}

export async function getHome() {
  return getData({
    query: `
    query getHome {
      testimonials {
        edges {
          node {
            content
            title
            slug
            testimonialsContent {
              company
              title
            }
          }
        }
      }
    }
    `,
    variables: {}
  });
}