import styled from 'styled-components'

/** @component */
export const Container = styled.div.attrs(props => props.style || {})`
  display: inline-block;
  margin: 1.5rem;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);
  border-radius: 0.8rem;
`
