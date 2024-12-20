# tinker-tools
Easy tinkering for your React projects to customize until greatness 🦄

[![npm (tag)](https://img.shields.io/npm/v/tinker-tools?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/tinker-tools) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/tinker-tools?style=flat&colorA=000000&colorB=000000&label=gzipped)](https://bundlephobia.com/result?p=tinker-tools) 

### Installation

```bash
npm i tinker-tools
```

### Quick start

Simply call the `useTinkering` hook from anywhere in your app:

```jsx
import { useTinkering } from 'tinker-tools'

function MyComponent() {

  const { name, count } = useTinkering({ name: 'World', count: 0 })

  return (
    <div>
      Hey {name}, hello! {count}
    </div>
  )
}
```