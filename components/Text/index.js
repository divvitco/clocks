import React from 'react'
import { TextSpan, TextDiv } from './styled'

export default function Text({
  children,
  inline,
  style = {},
  fontSize = '1.6rem'
}) {
  const Tag = inline ? TextSpan : TextDiv
  const styles = { ...style, fontSize }

  return <Tag style={styles}>{children}</Tag>
}
