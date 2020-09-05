import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Container, Card } from 'components/common'
import folderIcon from '../../../../static/icons/folder.svg';
import githubIcon from '../../../../static/icons/github.svg';
import eyeIcon from '../../../../static/icons/eye.svg'
import { Wrapper, OuterContainer, Grid, Item, Content, Header, Stack } from './styles'


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
  );

  
  return (
    <OuterContainer>
    <Wrapper as={Container}  id="projects">
      <h1>Projects</h1>
      <Grid>
        {edges.map(({ node: {frontmatter} }, i) => (
          <Item
            key={i} className="item"
          >
            <Card>
            <Header>
                  <div className="icon">
                    <img src={folderIcon} alt="Folder Icon"/>
                  </div>
                  <div className="links">
                    <a href={frontmatter.sourcelink} target="_blank"><img src={githubIcon} alt="Github Icon"/></a>
                    <a href={frontmatter.sitelink} target="_blank" >
                      <img src={eyeIcon} alt="Eye Icon"/>
                      </a>
                  </div>
                </Header>
              <Content>
                <h4>{frontmatter.title}</h4>
                <p>{frontmatter.description}</p>
              </Content>
                  <Stack>
                    {frontmatter.technologies.split(',').map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </Stack>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
    </OuterContainer>
  )
}
