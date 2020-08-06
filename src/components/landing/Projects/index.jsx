import React, {useEffect} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/common'
import starIcon from 'assets/icons/star.svg'
import forkIcon from 'assets/icons/fork.svg'
import { Wrapper, OuterContainer, Grid, Item, Content, Stats } from './styles'


export const Projects = () => {
  const {allMarkdownRemark: {edges}} = useStaticQuery(
    graphql`
  {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          technologies
          sourcelink
          sitelink
          description
          title
        }
      }
    }
  }
}
    `
  )
  
  return (
    <OuterContainer>
    <Wrapper as={Container}  id="projects">
      <h1>Projects</h1>
      <Grid>
        {edges.map(({ node: {frontmatter} }, i) => (
          <Item
            key={i}
            as="a"
            href={frontmatter.sitelink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <Content>
                <h4>{frontmatter.title}</h4>
                <p>{frontmatter.description}</p>
              </Content>
              <Stats>
                <div>
                  <img src={starIcon} alt="stars" />
                  <span>0</span>
                </div>
                <div>
                  <img src={forkIcon} alt="forks" />
                  <span>0</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
    </OuterContainer>
  )
}
