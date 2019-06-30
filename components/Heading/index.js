import React from 'react'
import Text from 'components/Text'

const sizeToTagMap = {
  xs: 'h5',
  sm: 'h4',
  md: 'h3',
  lg: 'h2',
  xl: 'h1'
}

const sizeToEmsMap = {
  xs: '1.6rem',
  sm: '2.6rem',
  md: '3.6rem',
  lg: '4.6rem',
  xl: '5.6rem'
}

export default function Heading({ children, size = 'md' }) {
  const Tag = sizeToTagMap[size]
  const fontSize = sizeToEmsMap[size]

  return (
    <Tag style={{ fontSize, padding: '0', margin: '0' }}>
      {children}
    </Tag>
  )
}
