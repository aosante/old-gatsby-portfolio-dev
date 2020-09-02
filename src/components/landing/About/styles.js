import styled from 'styled-components';

export const AboutWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2.25rem;
    color: #ccd6f6;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 15pt;
    font-weight: normal;
    line-height: 1.3;
    color: #8892b0;
    &:last-of-type {
      margin-bottom: 2.5rem;
    }
  }
  a {
    color: #ff0a78;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
