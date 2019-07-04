import React from 'react'
import { Container } from './styled'
import Heading from './../Heading'

export default function CardHeader({ children, style = {} }) {
  return (
    <Container>
      <Heading size={'xs'} style={style}>{children}</Heading>
    </Container>
  )
}
