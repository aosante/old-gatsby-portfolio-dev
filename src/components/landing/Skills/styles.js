import styled from 'styled-components';

export const Wrapper  = styled.div`
    padding: 4rem 0;
    margin: 0 auto;
    max-width: 1280px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid purple;
    @media (max-width: 960px) {
        flex-direction: column;
        padding: 0;
    }
`

export const Content = styled.div`
    border: 2px solid red;
    flex: 1;
    padding: 2rem 3rem;
    h1 {
        margin-bottom: 2rem;
        font-size: 2.25rem;
        color: #ccd6f6;
        text-align: left;
    }
    p {
    margin-bottom: 1.5rem;
    font-size: 15pt;
    font-weight: normal;
    line-height: 1.3;
    color: #8892b0;
    text-align: left;
    &:last-of-type {
      margin-bottom: 2.5rem;
    }
  }
`

export const SkillGrid = styled.div`
    border: 2px solid yellow;
    flex: 1.5;
`