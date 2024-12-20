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
import { TinkerInputs } from './types'

/**
 * Register all the primitive inputs.
 * @note could potentially be done elsewhere.
 */

register(TinkerInputs.SELECT, select)
register(TinkerInputs.IMAGE, image)
register(TinkerInputs.NUMBER, number)
register(TinkerInputs.COLOR, color)
register(TinkerInputs.STRING, string)
register(TinkerInputs.BOOLEAN, boolean)
register(TinkerInputs.INTERVAL, interval)
register(TinkerInputs.VECTOR3D, vector3d)
register(TinkerInputs.VECTOR2D, vector2d)

// main hook
export { useTinker } from './useTinker'

// panel components
export { Tinker, TinkerPanel } from './components/Tinker'

// simplifies passing store as context
export { useStoreContext, TinkerStoreProvider } from './context'

// export the TinkerStore (default store)
// hook to create custom store
export { tinkerStore, useCreateStore } from './store'

// export folder, monitor, button
export * from './helpers'

export { TinkerInputs }
