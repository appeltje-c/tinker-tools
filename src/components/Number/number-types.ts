import type { InputWithSettings, TinkerInputProps, NumberSettings } from '../../types'

export type InternalNumberSettings = {
  min: number
  max: number
  step: number
  pad: number
  initialValue: number
  suffix?: string
}
export type NumberInput = InputWithSettings<number | string, NumberSettings>

export type NumberProps = TinkerInputProps<number, InternalNumberSettings>

export type RangeSliderProps = { value: number; onDrag: (v: number) => void } & InternalNumberSettings
