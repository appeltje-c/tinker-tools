// @ts-expect-error
import merge from 'merge-value'
import { getKeyPath } from '../../utils'
import type { Tree } from '../../types'

export const isInput = (v: object) => '__tinkerInput' in v

export const buildTree = (paths: string[], filter?: string): Tree => {
  const tree = {}
  const _filter = filter ? filter.toLowerCase() : null
  paths.forEach((path) => {
    const [valueKey, folderPath] = getKeyPath(path)
    if (!_filter || valueKey.toLowerCase().indexOf(_filter) > -1) {
      merge(tree, folderPath, {
        [valueKey]: { __tinkerInput: true, path },
      })
    }
  })
  return tree
}
