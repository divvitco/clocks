import React from 'react'
import { configurations } from './../theme.js'

const toArr = itm => Array.isArray(itm) ? itm : [itm]

export default function P({
  children,
  inline = false,
  style,
  cStyle
}) {
  const display = { display: inline ? 'inline-block' : 'block' }
  const containerStyles = { ...display, ...style }
  const childStyles = toArr(children).map((c, i) => {
    const style = { ...display, ...cStyle }

    Object.keys(style).forEach(k => {
      style[k] = toArr(style[k])[i] || toArr(style[k])[0]
    })

    return style
  })

  return (
    <div style={containerStyles}>
      {toArr(children).map((c, i) => {
        return <div key={i} style={childStyles[i]}>{c}</div>
      })}
    </div>
  )
}
