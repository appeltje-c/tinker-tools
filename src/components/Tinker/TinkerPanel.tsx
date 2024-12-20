import React from 'react'
import { useStoreContext } from '../../context'
import { TinkerRoot, TinkerRootProps } from './TinkerRoot'

type TinkerPanelProps = Partial<TinkerRootProps>

// uses custom store
export function TinkerPanel({ store, ...props }: TinkerPanelProps) {
  const parentStore = useStoreContext()
  const _store = store === undefined ? parentStore : store
  return <TinkerRoot store={_store} {...props} />
}
