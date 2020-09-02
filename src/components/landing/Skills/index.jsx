
import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';

import {Wrapper, Content, SkillGrid} from './styles';


export const Skills = () => {
    const {allSite: {edges}} = useStaticQuery(graphql`
     {
  allSite {
    edges {
      node {
        siteMetadata {
          skillData {
            height
            css
          }
        }
      }
    }
  }
     }
    `);

    const {node: {siteMetadata: {skillData}}} = edges[0];
    console.log(skillData);

    return (
        <Wrapper>
            <Content>
                <h1>Skills</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod consectetur saepe velit dolorem? Voluptas placeat voluptatem cum sint! Cupiditate rerum impedit maxime a officiis fuga enim deleniti natus! Aliquid eaque eum accusantium assumenda voluptate! Error rerum officiis unde eos repellendus animi inventore quia!</p>
            </Content>
            <SkillGrid>
                Skill grid component goes here
            </SkillGrid>
        </Wrapper>
    )
}


