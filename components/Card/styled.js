import styled from 'styled-components'

/** @component */
export const Container = styled.div.attrs(props => props.style || {})`
  display: inline-block;
  background: white;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.14), 0px -12px 20px 15px rgba(0,0,0,.025);
  border-radius: 0.4rem;
  overflow: hidden;
`
