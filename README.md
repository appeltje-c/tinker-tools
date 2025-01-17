# tweak-tools

Easy tweaking for your React projects to customize until greatness 🦄 🚀

[![npm (tag)](https://img.shields.io/npm/v/tweak-tools?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/tweak-tools) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/tweak-tools?style=flat&colorA=000000&colorB=000000&label=gzipped)](https://bundlephobia.com/result?p=tweak-tools) 

## Installation

```bash
npm i tweak-tools
```

### Quick start

Simply call the `useTweaks` hook from anywhere in your app:

```jsx
import { useTweaks } from 'tweak-tools'

function MyComponent() {

  const { name, count } = useTweaks({ name: 'World', count: 0 })

  return (
    <div>
      Hey {name}, hello! {count}
    </div>
  )
}
```
