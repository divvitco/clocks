import React from 'react'
import { Input } from './styled'

export default function Button({ style = {}, placeholder = 'Placeholder text' }) {
  return <Input style={style} placeholder={placeholder} />
}
