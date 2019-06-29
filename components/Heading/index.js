import React from 'react'
import Text from 'components/Text'

export default function Heading({ children, size = 'md' }) {
  const sizeToTagMap = {
    xs: 'h5',
    sm: 'h4',
    md: 'h3',
    lg: 'h2',
    xl: 'h1'
  }
  const Tag = sizeToTagMap[size]

  return (
    <Tag>
      <Text fontWeight={600} inline={true}>
        {children}
      </Text>
    </Tag>
  )
}
