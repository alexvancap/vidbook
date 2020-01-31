# React Native Starter Repo

This is a starter repo for building React Native Applications.

It includes several helpful starter-components which are documented below.

*To Start:*
`npm start`


It uses `expo` and  `react-native-paper`

## Layout

### `Container`

 Fills the remaining space in the parent and wraps it's children in a `ScrollView`

```jsx
import React from 'react'
import { Container } from 'triframe/designer'

export const App = () => (
	<Container>
    	// children
    </Container>
)
```

##### Props

| name   | value                                                        |
| ------ | ------------------------------------------------------------ |
| `slim` | Optional boolean (Defaults to false). If true, the container will not apply margin, otherwise, it will apply 50px of margin |



### `Section`

Wraps part of a page and gives it margin

```jsx
import React from 'react'
import { Container, Section } from 'triframe/designer'

export const App = () => (
	<Container>
    	<Section>
            // Children
        </Section>
        <Section>
            // Children
        </Section>
        <Section>
            // Children
        </Section>
    </Container>
)
```

##### Props

> None



### `Area`

 Fills the remaining space in the parent and allows the developer to align the contents inside it

```jsx
import React from 'react'
import { Container, Area } from 'triframe/designer'

export const App = () => (
    <Container>
        <Area inline alignX="center">
            // children
        </Area>
     </Container>
)
```

##### Props

| name     | value                                                        |
| -------- | ------------------------------------------------------------ |
| `inline` | Optional boolean (Defaults to false). If true, `Area`'s contents will be displayed inline |
| `alignX` | One of: 'left' \| 'right' \| 'center'. Determines the alignment of the `Area`'s contents in the x-axis |
| `alignY` | One of: 'left' \| 'right' \| 'center'. Determines the alignment of the `Area`'s contents in the y-axis |



### `Grid`

  Creates a `Grid` which displays dynamically based on screen size

```jsx
import React from 'react'
import { Container, Grid } from 'triframe/designer'

export const App = () => (
    <Container>
        <Grid>
            // children
        </Grid>
     </Container>
)
```

##### Props

| name   | value                                               |
| ------ | --------------------------------------------------- |
| `base` | The number of columns for the grid. Defaults to 12. |



### `Column`

Creates a `Grid` which displays dynamically based on screen size

```jsx
import React from 'react'
import { Container, Grid, Column } from 'triframe/designer'

export const App = () => (
    <Container>
        <Grid>
            <Column>One</Column>
            <Column>Two</Column>
            <Column>Three</Column>
        </Grid>
     </Container>
)
```

##### Props

| name | value                                                        |
| ---- | ------------------------------------------------------------ |
| `xs` | number \| 'fix-bottom'. <br />If a number, the number of spaces this `Column` takes up in the grid on a extra-small screen (< 350px)<br />If 'fix-bottom', the `Column`'s position will be fixed to the bottom of the viewport on a extra-small screen (<350px) |
| `sm` | If a number, the number of spaces this `Column` takes up in the grid on a small screen ( 350px-450px)<br />If 'fix-bottom', the `Column`'s position will be fixed to the bottom of the viewport on a small screen (350px-450px) |
| `md` | If a number, the number of spaces this `Column` takes up in grid on a medium screen (450px-650px)<br />If 'fix-bottom', the `Column`'s position will be fixed to the bottom of the viewport on a medium screen (450px-650px) |
| `lg` | If a number, the number of spaces this `Column` takes up in grid on a large screen (650px-950px)<br />If 'fix-bottom', the `Column`'s position will be fixed to the bottom of the viewport on a largescreen (650px-950px) |
| `xl` | If a number, the number of spaces this `Column` takes up in grid on a small screen (> 950px)<br />If 'fix-bottom', the `Column`'s position will be fixed to the bottom of the viewport on a small screen (> 950px) |



 ## Typography

 ### `Text`

  Unstyled Text

```jsx
import React from 'react'
import { Container, Text } from 'triframe/designer'

export const App = () => (
    <Container>
    	<Text>Hello World</Text>
    </Container>
)
```

##### Props

> None



### `Title`

  A page title

```jsx
import React from 'react'
import { Container, Title } from 'triframe/designer'

export const App = () => (
    <Container>
    	<Title>Hello World</Title>
    </Container>
)
```

##### Props

> None



### `Heading`

  A section heading

```jsx
import React from 'react'
import { Container, Heading } from 'triframe/designer'

export const App = () => (
    <Container>
    	<Heading>Hello World</Heading>
    </Container>
)
```

##### Props

> None

### `Subheading`

  A subsection heading

```jsx
import React from 'react'
import { Container, Subheading } from 'triframe/designer'

export const App = () => (
    <Container>
    	<Subheading>Hello World</Subheading>
    </Container>
)
```

##### Props

> None

### `Paragraph`

  A paragraph

```jsx
import React from 'react'
import { Container, Paragraph } from 'triframe/designer'

export const App = () => (
    <Container>
    	<Paragraph>Hello World</Paragraph>
    </Container>
)
```

##### Props

> None



### `Caption`

  A caption

```jsx
import React from 'react'
import { Container, Caption } from 'triframe/designer'

export const App = () => (
    <Container>
    	<Caption>Hello World</Caption>
    </Container>
)
```

##### Props

> None



 ## Buttons

### `Button`

 https://callstack.github.io/react-native-paper/button.html 

### `BubbleButton`

FAB:  https://callstack.github.io/react-native-paper/fab.html 

### `ToggleButton`

 https://callstack.github.io/react-native-paper/toggle-button.html 



 ## Forms

 ### `TextField`

A basic space for text input

### `TextInput`

 https://callstack.github.io/react-native-paper/text-input.html 

### `FileInput`



### `HelperText`

 https://callstack.github.io/react-native-paper/helper-text.html 

### `ToggleSwitch`

 https://callstack.github.io/react-native-paper/switch.html 

### `RadioButton`

 https://callstack.github.io/react-native-paper/radio-button.html 



 ## Material

 ### `Chip`

 https://callstack.github.io/react-native-paper/chip.html 

### `Card`

 https://callstack.github.io/react-native-paper/card.html 

### `List `

 https://callstack.github.io/react-native-paper/list-item.html 

### `Badge`

 https://callstack.github.io/react-native-paper/badge.html 



## Misc

### `Appbar`

 https://callstack.github.io/react-native-paper/appbar.html 

### `Drawer`

 https://callstack.github.io/react-native-paper/drawer-item.html 

### `Modal `

 https://callstack.github.io/react-native-paper/modal.html 