import React from 'react'
import { configurations } from './../theme.js'

export default function FP({
  children,
  inline = false,
  alignItems,
  justifyContent,
  width,
  height,
  margin,
  padding,
  cFlex,
  cWidth,
  cHeight,
  cMargin,
  cPadding
}) {
  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '1px',
    backgroundColor: 'black',
    alignItems,
    justifyContent,
    width,
    height,
    margin,
    padding
  }
  const childStyles = {
    flex: cFlex,
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
