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
    width: 100%;
    & > div {
        border: 2px solid green;
        position: absolute;
        will-change: transform, width, height, opacity;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & > div > div {
        position: relative;
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
        overflow: hidden;
        text-transform: uppercase;
        font-size: 10px;
        line-height: 10px;
        border-radius: 4px;
        box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.2);
    }
    .item {
        width: 100px;
        height: 100px;
    }
    @media (max-width: 960px) {
        min-height: 300px;
        margin-top: 4rem;
    }
    @media (max-width: 680px) {
        min-height: 600px;
    }
`