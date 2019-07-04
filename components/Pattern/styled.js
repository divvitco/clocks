import styled from 'styled-components'

/** @component */
export const Container = styled.div.attrs(props => props.style || {})`
  z-index: -10;
  display: grid;
  position: absolute;
  grid-template-columns: 1fr 1fr;
  column-gap: 1px;
  width: 100%;
  height: 100%;
  transform: skew(-40deg);
`

/** @component */
export const Cell = styled.div.attrs(props => props.style || {})`
  background: ${props => props.idx % 2 === 0 ? 'rgb(0, 120, 255)' : 'white'};
`
