import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: hsla(239, 50%, 10%, 1);
  background: linear-gradient(hsla(0, 0%, 10%, 1),hsla(0, 0%, 0%, 1));
`;
export const Card = styled.div`
  position: relative;
  top: 200px;
  left: 50vw;
  width: 800px;
  aspect-ratio: 5/3;
  background: hsla(239, 50%, 10%, 1);
  background: hsl(210, 50%, 40%);
  box-shadow: hsl(239 0% 30% / 0.25) 0px 54px 55px, hsl(239 0% 30% / 0.12) 0px -12px 30px, hsl(239 0% 30% / 0.12) 0px 4px 3px, hsl(239 0% 30% / 0.17) 0px 12px 13px, hsl(239 100% 30% / 0.09) 0px -3px 5px;
`;
