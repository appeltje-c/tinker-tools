import { register } from './plugin'
import number from './components/Number'
import select from './components/Select'
import color from './components/Color'
import string from './components/String'
import boolean from './components/Boolean'
import vector3d from './components/Vector3d'
import vector2d from './components/Vector2d'
import image from './components/Image'
import interval from './components/Interval'
import { TweakInputs } from './types'

/**
 * Register all the primitive inputs.
 * @note could potentially be done elsewhere.
 */

register(TweakInputs.SELECT, select)
register(TweakInputs.IMAGE, image)
register(TweakInputs.NUMBER, number)
register(TweakInputs.COLOR, color)
register(TweakInputs.STRING, string)
register(TweakInputs.BOOLEAN, boolean)
register(TweakInputs.INTERVAL, interval)
register(TweakInputs.VECTOR3D, vector3d)
register(TweakInputs.VECTOR2D, vector2d)

// main hook
export { useTweaks } from './useTweaks'

// panel components
export { Tweak, TweakPanel } from './components/Tweak'

// simplifies passing store as context
export { useStoreContext, TweakStoreProvider } from './context'

// export the TweakStore (default store)
// hook to create custom store
export { tweakStore, useCreateStore } from './store'

// export folder, monitor, button
export * from './helpers'

export { TweakInputs }
