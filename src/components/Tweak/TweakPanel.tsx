import React from 'react'
import { useStoreContext } from '../../context'
import { TweakRoot, TweakRootProps } from './TweakRoot'

type TweakPanelProps = Partial<TweakRootProps>

// uses custom store
export function TweakPanel({ store, ...props }: TweakPanelProps) {
  const parentStore = useStoreContext()
  const _store = store === undefined ? parentStore : store
  return <TweakRoot store={_store} {...props} />
}
