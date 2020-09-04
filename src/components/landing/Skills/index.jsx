
import React, {useState, useEffect} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { useTransition, a } from 'react-spring'
import shuffle from 'lodash/shuffle'
import useMeasure from 'react-use-measure'
import { ResizeObserver } from '@juggle/resize-observer'
import {InView} from 'react-intersection-observer'
import {useSpring, animated} from 'react-spring'

import {Wrapper, Content, SkillGrid} from './styles'
import useMedia from './hooks/useMedia'
import skillImages from './img';


export const Skills = () => {
    const {allSite: {edges}} = useStaticQuery(graphql`
     {
  allSite {
    edges {
      node {
        siteMetadata {
          skillData {
            css
            height
            name
            isDark
          }
        }
      }
    }
  }
     }
    `);

    // Text animation
    const [showP, setShowP] = useState(false);
    const textProps = useSpring({opacity: showP ? 1 : 0, transform: showP ? 'translateX(0)' : 'translateX(-200px)', from: {opacity: 0}, config: {duration: 700},delay: 700}); 

    const {node: {siteMetadata: {skillData}}} = edges[0];
    
      // Hook1: Tie media queries to the number of columns
    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [4, 4, 4], 2);
    // Hook2: Measure the width of the container element
    const [ref, { width }] = useMeasure({polyfill: ResizeObserver});
    // Hook3: Hold items
    const [items, set] = useState(skillData);
    // Hook4: shuffle data every 2 seconds
    useEffect(() => void setInterval(() => set(shuffle), 2000), []);
    // Form a grid of stacked items using width & columns we got from hooks 1 & 2
    let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2] // X = container width / number of columns * column index, Y = it's just the height of the current column
      return { ...child, xy, width: width / columns, height: child.height / 2 }
    })
    // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
    const transitions = useTransition(gridItems, item => item.css, {
      from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
      enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
      update: ({ xy, width, height }) => ({ xy, width, height }),
      leave: { height: 0, opacity: 0 },
      config: { mass: 5, tension: 500, friction: 100 },
      trail: 25
    });

    // Fades in skills description when in view
    const onViewChange = inview => {
      if(!showP && inview) setShowP(true);
    }

    return (
        <Wrapper>
            <Content>
                <h1>Skills</h1>
                <InView tag="div" onChange={onViewChange}>
                  <animated.p style={textProps}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod consectetur saepe velit dolorem? Voluptas placeat voluptatem cum sint! Cupiditate rerum impedit maxime a officiis fuga enim deleniti natus! Aliquid eaque eum accusantium assumenda voluptate! Error rerum officiis unde eos repellendus animi inventore quia!</animated.p>
                </InView>
            </Content>
            <SkillGrid ref={ref} className="list" style={{ height: Math.max(...heights) }}>
                {transitions.map(({ item, props: { xy, ...rest }, key }) => (
                  <a.div key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
                      <img className={item.isDark && 'dark'} style={{maxWidth: 73}} src={skillImages[item.name]} alt={item.name}/>
                  </a.div>
                ))}
            </SkillGrid>
        </Wrapper>
    )
}


