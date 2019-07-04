import React from 'react'
import { Container, Cell } from './styled'

export default function Pattern({ cellCount, style }) {
  const cells = Array(cellCount).fill(true).map((itm, i) => <Cell key={i} idx={i} />)
console.log(cells);
  return <Container style={{style}}>{cells}</Container>
}
