## What is this?

This repo serves as an experimental playground for React component building blocks. I'm interested in building out UI components which have _zero positioning, placement or sizing_ and instead create higher-order components based on the CSS box model, flexbox and grids spec. These higher-order components enable seamless placement and positioning of components. Below is an example where the `P` utility component handles all placement of the components.

## Positioning Components

- `P` - used for standard positioning with widths, heights, margins & padding
- `FP` - used for flexbox positioning
- `GP` - used for grid positioning

Each of these components takes props which apply to the container, but they also take props which are mapped down to each of the `children`. These special props are prepended with `c`. For example, `<P margin={'0 auto'} cMargin={'1rem'}>` will apply a `margin` of `0 auto` to the container and a `1rem` margin to each of its children.

![Example](https://raw.githubusercontent.com/overlay-labs/clocks/master/example.png)

```javascript
import React from 'react'

import P from 'components/P'
import Text from 'components/Text'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Card from 'components/Card'

class App extends React.Component {
  render () {
    return (
      <P margin={'0 auto'} width={'70%'}>
        <P cMargin={'2rem 1.5rem 0 0'}>
          <Heading size={'xs'}>Building the Future</Heading>
          <Heading size={'sm'}>Building the Future</Heading>
          <Heading size={'md'}>Building the Future</Heading>
          <Heading size={'lg'}>Building the Future</Heading>
          <Heading size={'xl'}>Building the Future</Heading>
        </P>
        <P margin={'3rem 0'} width={'450px'}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in massa maximus, commodo felis vel, ultricies erat. Donec laoreet metus eu ligula rutrum molestie.</Text>
        </P>
        <P inline cMargin={'0 1.5rem 0 0'}>
          <Button variant="primary" title="Start Now" />
          <Button variant="secondary" title="Contact Us" />
        </P>
        <P margin={'3rem 0'} width={'350px'}>
          <Card>
            <P inline margin={'2rem'} cPadding={'0 0 3rem 0'}>
              <Heading size={'sm'}>24/7 Phone Support</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in massa maximus, commodo felis vel, ultricies erat. Donec laoreet metus eu ligula rutrum molestie.</Text>
            </P>
          </Card>
        </P>
      </P>
    )
  }
}

export default App
```
