import styled from 'styled-components';

interface P {
  visibled:boolean
}
export const Container = styled.div<P>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  opacity: ${p => p.visibled ? 0 : 1};
  transition: 0.5s;
`;
