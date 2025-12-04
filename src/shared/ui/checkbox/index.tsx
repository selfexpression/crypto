import {
  Checkbox as RadixCheckbox,
  CheckboxIndicator,
} from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'
import { forwardRef } from 'react'
import type { ReactNode } from 'react'

import { Icon } from '@/shared/ui'
import { classNames } from '@/shared/lib'
import styles from './styles.module.css'

interface ICheckboxProps {
  label?: ReactNode
  name?: string
  className?: string
  id?: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}

const Checkbox = forwardRef<HTMLButtonElement, ICheckboxProps>(
  (
    {
      label,
      name,
      className,
      id,
      checked,
      onCheckedChange,
      disabled,
      ...restProps
    },
    ref
  ) => {
    const checkboxId = id || name

    return (
      <div className={classNames(styles['checkbox-group'], className)}>
        <div className={styles['checkbox-label']}>
          <RadixCheckbox
            {...restProps}
            checked={checked}
            className={styles['checkbox']}
            disabled={disabled}
            id={checkboxId}
            name={name}
            ref={ref}
            onCheckedChange={onCheckedChange}
          >
            <CheckboxIndicator className={styles['checkbox-indicator']}>
              <Icon name="checkmark" size={12} />
            </CheckboxIndicator>
          </RadixCheckbox>
          {label && (
            <Label className={styles['checkbox-text']} htmlFor={checkboxId}>
              {label}
            </Label>
          )}
        </div>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
