import styled from 'styled-components'

/** @component */
export const Input = styled.input.attrs(props => ({ style: props.style, ...props }))`
  width: calc(100% - 3.2rem);
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
  border: 0.2rem solid rgba(0, 0, 0, 0);

  &:focus {
    background: white;
    border: 0.2rem solid rgba(0, 0, 0, 0.1);
  }
`
