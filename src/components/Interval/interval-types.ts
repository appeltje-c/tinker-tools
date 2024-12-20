import type { TinkerInputProps, IntervalInput } from '../../types'
import type { InternalNumberSettings } from '../Number/number-types'

export type Interval = IntervalInput['value']
export type InternalInterval = { min: number; max: number }

export type InternalIntervalSettings = {
  bounds: [number, number]
  min: InternalNumberSettings
  max: InternalNumberSettings
}

export type IntervalProps = TinkerInputProps<Interval, InternalIntervalSettings, InternalInterval>

export type IntervalSliderProps = {
  value: InternalInterval
  onDrag: (v: Partial<InternalInterval>) => void
} & InternalIntervalSettings
