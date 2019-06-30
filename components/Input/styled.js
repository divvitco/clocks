import styled from 'styled-components'

/** @component */
export const Input = styled.input.attrs(props => ({ style: props.style, placeholder: props.placeholder}))`
  border: 0;
  margin: 0;
  padding: 0 1.4rem;
  height: 4rem;
  outline: none;
  border-radius: 0.4rem;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: .025rem;
  transition: all .15s ease;
  background: rgba(0, 0, 0, 0.1);

  &:focus {
    background: white;
  }
`
