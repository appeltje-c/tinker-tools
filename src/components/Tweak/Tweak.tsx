import React, { useEffect } from 'react'
import { tweakStore } from '../../store'
import { TweakRoot, TweakRootProps } from './TweakRoot'
import { render } from '../../utils/react'

let rootInitialized = false
let rootEl: HTMLElement | null = null

type TweakProps = Omit<Partial<TweakRootProps>, 'store'> & { isRoot?: boolean }

// uses global store
export function Tweak({ isRoot = false, ...props }: TweakProps) {
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

  return <TweakRoot store={tweakStore} {...props} />
}

/**
 * This hook is used by Tweak useTweaks, and ensures that we spawn a Tweak Panel
 * without the user having to put it into the component tree. This should only
 * happen when using the global store
 * @param isGlobalPanel
 */
export function useRenderRoot(isGlobalPanel: boolean) {
  useEffect(() => {
    if (isGlobalPanel && !rootInitialized) {
      if (!rootEl) {
        rootEl =
          document.getElementById('tweak__root') || Object.assign(document.createElement('div'), { id: 'tweak__root' })
        if (document.body) {
          document.body.appendChild(rootEl)
          render(<Tweak isRoot />, rootEl)
        }
      }
      rootInitialized = true
    }
  }, [isGlobalPanel])
}
