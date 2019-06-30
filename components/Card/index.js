import React from 'react'
import { Container } from './styled'

export default function Card({ children, style }) {
  return <Container style={{style}}>{children}</Container>
}
