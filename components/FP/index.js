import React from 'react'
import { configurations } from './../theme.js'

export default function FP({
  children,
  inline = false,
  width,
  height,
  margin,
  padding,
  cWidth,
  cHeight,
  cMargin,
  cPadding
}) {
  const containerStyles = {
    display: 'flex',
    width,
    height,
    margin,
    padding
  }
  const childStyles = {
    flex: '1',
    width: cWidth,
    height: cHeight,
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
