import React from 'react'
import { Container } from './styled'
import { configurations } from './../theme.js'

export default function Button({ variant = 'primary', title }) {
  const style = configurations[variant]

  return <Container style={{style}}>{title}</Container>
}
