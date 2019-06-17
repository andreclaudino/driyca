import { useStaticQuery, graphql } from "gatsby"

const backgroundsQuery = 
  () => {
    return (
      useStaticQuery(graphql`
        query {
          backgrounds:allFile(filter: {relativeDirectory: {eq: "slides"}}) {
            edges {
              node {
                relativeDirectory
                relativePath
                publicURL
                nlink
              }
            }
          }
        }
      `)
    ).backgrounds.edges
  };
export default backgroundsQuery;