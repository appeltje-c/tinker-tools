/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Type tests (run them with yarn test:types)
 */

import { expectType } from 'tsd'
import { folder } from '../helpers'
import { createPlugin } from '../plugin'
import { useTinker } from '../useTinker'

/**
 * api
 */
expectType<{ a: number }>(useTinker({ a: 3 }))
// b shouldn't be returned by useTinker when transient
expectType<{ a: number }>(useTinker({ a: 3, b: { value: '#fff', onChange: () => { } } }))
// b shouldn't be returned by useTinker when transient
expectType<{ a: number }>(useTinker({ a: 3, b: { value: '#fff', onChange: () => { }, transient: true } }))
// @ts-expect-error transient shouldn't be usable alone
expectType<{ a: number }>(useTinker({ a: 3, b: { value: '#fff', transient: true } }))
// b should be returned when transient is false
expectType<{ a: number; b: string }>(useTinker({ a: 3, b: { value: '#fff', onChange: () => { }, transient: false } }))
expectType<[{ a: number }, (value: { a?: number }) => void, (path: 'a') => number]>(useTinker(() => ({ a: 3 })))
expectType<
  [
    { a: number },
    (value: { a?: number; color?: string }) => void,
    <T extends 'a' | 'color'>(path: T) => { a: number; color: string }[T]
  ]
>(useTinker(() => ({ a: 3, color: { value: '#fff', onChange: () => { } } })))

/**
 * options
 */
expectType<{ a: number }>(useTinker({ a: { value: 10, render: () => true, label: 'number' } }))
expectType<{ a: { x: number; y: number } }>(
  useTinker({ a: { value: { x: 10, y: 10 }, label: 'label', render: (get) => get('something') } })
)

// TODO fix this as this is valid logic
// @ts-expect-error
expectType<{ a: { x: number; y: number } }>(useTinker({ a: { x: 10, y: 10, label: 'label' } }))

/**
 * numbers
 */
expectType<{ a: number }>(useTinker({ a: 10 }))
expectType<{ a: number; b: number }>(useTinker({ a: 10, b: 3 }))
expectType<{ a: number }>(useTinker({ a: { value: 10 } }))
expectType<{ a: number }>(useTinker({ a: { value: 10, min: 0, max: 10, step: 1 } }))

/**
 * strings
 */
expectType<{ a: string }>(useTinker({ a: 'some string' }))

/**
 * selects
 */
expectType<{ a: string }>(useTinker({ a: { options: ['foo', 'bar'] } }))
expectType<{ a: number | string }>(useTinker({ a: { options: [1, 'bar'] } }))
expectType<{ a: string | number | Array<string | number> }>(useTinker({ a: { options: ['foo', 1, ['foo', 'bar']] } }))
expectType<{ a: boolean | number }>(useTinker({ a: { options: { foo: 1, bar: true } } }))
expectType<{ a: number | string | string[] }>(useTinker({ a: { value: 3, options: ['foo', ['foo', 'bar']] } }))

/**
 * images
 */
expectType<{ a: string | undefined }>(useTinker({ a: { image: undefined } }))

/**
 * color objects
 * @note: colors represented as strings are already covered by string.
 */
expectType<{ a: { r: number; g: number; b: number } }>(useTinker({ a: { r: 10, g: 10, b: 10 } }))
expectType<{ a: { r: number; g: number; b: number; a: number } }>(useTinker({ a: { r: 10, g: 10, b: 10, a: 1 } }))

/**
 * booleans
 */
expectType<{ a: boolean }>(useTinker({ a: true }))
expectType<{ a: boolean }>(useTinker({ a: false }))

/**
 * intervals
 */
expectType<{ a: [number, number] }>(useTinker({ a: { value: [0, 10], min: 0, max: 20 } }))

/**
 * Vector2d
 */
// object format
expectType<{ a: { x: number; y: number } }>(useTinker({ a: { x: 10, y: 10 } }))
expectType<{ a: { width: number; height: number } }>(useTinker({ a: { width: 10, height: 10 } }))
expectType<{ a: { width: number; height: number } }>(useTinker({ a: { value: { width: 10, height: 10 }, min: 0 } }))

// array format
expectType<{ a: [number, number] }>(useTinker({ a: [0, 0] }))
expectType<{ a: [number, number] }>(useTinker({ a: { value: [0, 0] } }))
expectType<{ a: [number, number] }>(useTinker({ a: { value: [0, 0], joystick: 'invertY' } }))

/**
 * Vector3d
 */
// object format
expectType<{ a: { x: number; y: number; z: number } }>(useTinker({ a: { x: 10, y: 10, z: 10 } }))
expectType<{ a: { width: number; height: number; depth: number } }>(
  useTinker({ a: { width: 10, height: 10, depth: 1 } })
)
expectType<{ a: { width: number; height: number; depth: number } }>(
  useTinker({ a: { value: { width: 10, height: 10, depth: 1 } } })
)

// array format
expectType<{ a: [number, number, number] }>(useTinker({ a: [0, 0, 0] }))
expectType<{ a: [number, number, number] }>(useTinker({ a: { value: [0, 0, 0] } }))

/**
 * folders
 */

expectType<{ a1: number; b1: number; b2: string }>(
  useTinker({
    a: folder({
      a1: 1,
      b: folder({ b1: { value: 10 }, b2: 'hello' }),
    }),
  })
)

expectType<{
  pos2dArr: [number, number]
  pos3dArr: [number, number, number]
}>(
  useTinker({
    someFolder: folder({ pos2dArr: [100, 200], innerFolder: folder({ pos3dArr: [0, 0, 0] }) }),
  })
)

/**
 * custom plugins
 */

const nullOrString = createPlugin({
  normalize: (input: string | null) => ({ value: input }),
  component: () => null,
})

const data_nullOrString = useTinker({
  null: nullOrString(null),
  string: nullOrString('hello'),
})

expectType<{
  null: null | string
  string: null | string
}>(data_nullOrString)

const nullOrStringObject = createPlugin({
  normalize: (input: { value: string | null }) => ({ value: input.value }),
  component: () => null,
})

const data_nullOrStringObject = useTinker({
  null: nullOrStringObject({ value: null }),
  string: nullOrStringObject({ value: 'hello' }),
})

expectType<{
  null: null | string
  string: null | string
}>(data_nullOrStringObject)

const arrayNumber = createPlugin({
  normalize: (input: number[]) => ({ value: input }),
  component: () => null,
})

const data_nullOrNumberArray = useTinker({
  array: arrayNumber([1, 2, 3]),
})

expectType<{ array: number[] }>(data_nullOrNumberArray)
