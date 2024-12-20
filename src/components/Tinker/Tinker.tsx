import React, { useEffect } from 'react'
import { tinkerStore } from '../../store'
import { TinkerRoot, TinkerRootProps } from './TinkerRoot'
import { render } from '../../utils/react'

let rootInitialized = false
let rootEl: HTMLElement | null = null

type TinkerProps = Omit<Partial<TinkerRootProps>, 'store'> & { isRoot?: boolean }

// uses global store
export function Tinker({ isRoot = false, ...props }: TinkerProps) {
  useEffect(() => {
    rootInitialized = true
    // if this panel was attached somewhere in the app and there is already
    // a floating panel, we remove it.
    if (!isRoot && rootEl) {
      rootEl.remove()
      rootEl = null
    }
    return () => {
      if (!isRoot) rootInitialized = false
    }
  }, [isRoot])

  return <TinkerRoot store={tinkerStore} {...props} />
}

/**
 * This hook is used by Tinker useTinkering, and ensures that we spawn a Tinker Panel
 * without the user having to put it into the component tree. This should only
 * happen when using the global store
 * @param isGlobalPanel
 */
export function useRenderRoot(isGlobalPanel: boolean) {
  useEffect(() => {
    if (isGlobalPanel && !rootInitialized) {
      if (!rootEl) {
        rootEl =
          document.getElementById('tinker__root') || Object.assign(document.createElement('div'), { id: 'tinker__root' })
        if (document.body) {
          document.body.appendChild(rootEl)
          render(<Tinker isRoot />, rootEl)
        }
      }
      rootInitialized = true
    }
  }, [isGlobalPanel])
}
