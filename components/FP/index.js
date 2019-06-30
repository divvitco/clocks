import React from 'react'
import { configurations } from './../theme.js'

export default function FP({
  children,
  inline = false,
  width,
  height,
  margin,
  padding,
  cMargin,
  cPadding
}) {
  const display = { display: inline ? 'inline-block' : 'block' }
  const containerStyles = {
    display: 'flex',
    width,
    height,
    margin,
    padding
  }
  const childStyles = {
    ...display,
    margin: cMargin,
    padding: cPadding
  }

  return (
    <div style={containerStyles}>
      {(Array.isArray(children) ? children : [children]).map((c, i) => {
        return <div key={i} style={childStyles}>{c}</div>
      })}
    </div>
  )
}
