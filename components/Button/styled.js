import styled from 'styled-components'

/** @component */
export const Container = styled.div.attrs(props => props.style || {})`
  display: inline-block;
  height: 4rem;
  line-height: 4rem;
  padding: 0 1.4rem;
  box-shadow: 0 0.4rem 0.6rem rgba(50,50,93,.11), 0 0.1rem 0.3rem rgba(0,0,0,.08);
  border-radius: 0.4rem;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: .025rem;
  text-transform: uppercase;
  transition: all .15s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.1rem);
  }

  &:active {
    transform: translateY(0);
  }
`
