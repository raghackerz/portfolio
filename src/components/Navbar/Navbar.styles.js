import styled from 'styled-components';

export const Wrapper = styled.div`
  * {
    text-decoration: none;
  }
  background: hsl(0 100% 100% / 0);
  height: 4rem;
  width: 84vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Element = styled.div`
  color: hsl(360 14% 88% / 0.9);
  font-size: 1.4rem;
  margin: 0 2rem 0 2rem;
  font-family: 'EB Garamond', serif;
  animation-fill-mode: forwards;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    border: 1px solid red;
    transform: scaleX(0);
    transform-origin: left;
  }
  :hover {
    ::before{
      transform: scaleX(1);
      transition: transform 300ms ease;
    }
  }
`
