import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


export const query = graphql`
query {
  allNodeArticle {
    nodes {
      title
    }
  }
}

`
const Testing = () => {
    const articles = useStaticQuery(query).allNodeArticle.nodes;
  return (
    <div>
      <h1>Testing</h1>
      {
        articles.map((article,index)=>{
            return(
                <h2>{article.title}</h2>
            )
        })
      }
    </div>
  )
}

export default Testing
