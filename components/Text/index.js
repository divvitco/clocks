import React from 'react'
import { TextSpan, TextDiv } from './styled'

export default function Text({
  children,
  inline,
  fontWeight
}) {
  const Tag = inline ? TextSpan : TextDiv

  return <Tag>{children}</Tag>
}
