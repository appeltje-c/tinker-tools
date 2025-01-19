import type { TweakInputProps, Vector2d, VectorObj } from '../../types'
import type { InternalVectorSettings } from '../Vector/vector-types'

export type InternalVector2dSettings = InternalVectorSettings<string, [string, string]> & {
  joystick: boolean | 'invertY'
}
export type Vector2dProps = TweakInputProps<Vector2d, InternalVector2dSettings, VectorObj>
