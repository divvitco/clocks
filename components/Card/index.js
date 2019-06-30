import React from 'react'
import { Container } from './styled'

export default function Button({ children, style }) {
  return <Container style={{style}}>{children}</Container>
}
