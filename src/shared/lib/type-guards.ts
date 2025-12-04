export type ObjectValue = Record<string, boolean | null | undefined>

export const isString = (value: unknown): value is string =>
  typeof value === 'string'

export const isObject = (value: unknown): value is ObjectValue =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value)
