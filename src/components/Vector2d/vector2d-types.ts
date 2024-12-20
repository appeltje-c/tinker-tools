import type { TinkerInputProps, Vector2d, VectorObj } from '../../types'
import type { InternalVectorSettings } from '../Vector/vector-types'

export type InternalVector2dSettings = InternalVectorSettings<string, [string, string]> & {
  joystick: boolean | 'invertY'
}
export type Vector2dProps = TinkerInputProps<Vector2d, InternalVector2dSettings, VectorObj>
