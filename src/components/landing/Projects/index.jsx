import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/common'
import starIcon from 'assets/icons/star.svg'
import folderIcon from '../../../../static/icons/folder.svg';
import githubIcon from '../../../../static/icons/github.svg';
import eyeIcon from '../../../../static/icons/eye.svg'
import { Wrapper, OuterContainer, Grid, Item, Content, Header, Stats } from './styles'


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
            key={i}
            as="a"
            href={frontmatter.sitelink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
            <Header>
                  <div className="icon">
                    <img src={folderIcon} alt="Folder Icon"/>
                  </div>
                  <div className="links">
                    <a href="#"><img src={githubIcon} alt="Github Icon"/></a>
                    <a href="#">
                      <img src={eyeIcon} alt="Eye Icon"/>
                      </a>
                  </div>
                </Header>
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
