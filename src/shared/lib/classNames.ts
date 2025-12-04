import { isString, isObject, type ObjectValue } from './type-guards'

type ClassNamesValue = string | boolean | undefined | null | ObjectValue

export function classNames(...classes: ClassNamesValue[]): string {
  const result: string[] = []

  for (const cls of classes) {
    if (isString(cls) && cls.trim()) {
      result.push(cls.trim())
    } else if (isObject(cls)) {
      for (const [key, value] of Object.entries(cls)) {
        if (value && key.trim()) {
          result.push(key.trim())
        }
      }
    }
  }

  return result.join(' ')
}
