# react-honeycomb
React Honeycomb is a library for displaying lists as hexagonal honeycombs in React applications.

## Installation
To install the library using npm run the following command in your terminal:

```bash
npm install react-honeycomb
```

Alternatively, if you're using yarn, run:

```bash
yarn add react-honeycomb
```

## Usage

Currently the library provides two kinds of Honeycomb components:  `Honeycomb`  (a.k.a Static Honeycomb) and `ResponsiveHoneycomb`.

### Static Honeycomb

`Honeycomb` component generates a grid with a given number of columns regardless of the available space. It's suitable for the cases when you're sure about how many columns you are going to need or you want to have control over the responsiveness by manipulating the `columns` prop with your own rules.

```jsx
import { Honeycomb, Hexagon } from 'react-honeycomb';

<Honeycomb
  columns={5}
  size={SIZE_OF_HEXAGON_SIDE}
  items={MY_ITEMS}
  renderItem={(item) => (
    <Hexagon className="awesome-class-name">
      renderItem(item)
    </Hexagon>
  )}
/>
```

### Responsive Honeycomb

`ResponsiveHoneycomb` component tries to fit as many columns as its container allows by attaching a `ResizeObzerver` to the container element (which results in a possible performance overhead). It would suit you if you need to fill all available horizontal space with the list items.

```jsx
import { ResponsiveHoneycomb, Hexagon } from 'react-honeycomb';

<ResponsiveHoneycomb
  defaultWidth={1024}
  size={SIZE_OF_HEXAGON_SIDE}
  items={MY_ITEMS}
  renderItem={(item) => (
    <Hexagon className="awesome-class-name">
      renderItem(item)
    </Hexagon>
  )}
/>
```

## Contribution
The project was initially created just as a quick experiment, so it may have bugs or be missing some features. Don’t be shy to open a pull request if you feel like making it better. If you want to make a significant change, it would be better to open an issue first to discuss the details.

