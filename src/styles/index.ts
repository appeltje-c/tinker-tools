import { useContext } from 'react'
import { getDefaultTheme, FullTheme, TinkerCustomTheme, createTheme } from './stitches.config'
import { ThemeContext } from '../context'
import { TinkerErrors } from '../utils'

export function mergeTheme(newTheme?: TinkerCustomTheme): { theme: FullTheme; className: string } {
  const defaultTheme = getDefaultTheme()
  if (!newTheme) return { theme: defaultTheme, className: '' }
  Object.keys(newTheme!).forEach((key) => {
    // @ts-ignore
    Object.assign(defaultTheme![key], newTheme![key])
  })
  const customTheme = createTheme(defaultTheme)
  return { theme: defaultTheme, className: customTheme.className }
}

export function useTh<C extends keyof FullTheme>(category: C, key: keyof FullTheme[C]) {
  const { theme } = useContext(ThemeContext)!
  if (!(category in theme!) || !(key in theme![category]!)) {
    console.warn(TinkerErrors.THEME_ERROR, category, key)
    return ''
  }

  let _key = key
  while (true) {
    // @ts-ignore
    let value = theme[category][_key]
    if (typeof value === 'string' && value.charAt(0) === '$') _key = value.substr(1) as any
    else return value
  }
}

export * from './stitches.config'
