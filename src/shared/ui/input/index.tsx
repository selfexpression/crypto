import { forwardRef } from 'react'

import { FormField } from '@/shared/ui'
import { classNames } from '@/shared/lib'
import styles from './styles.module.css'

interface IInputProps {
  label?: string
  placeholder?: string
  type?: string
  name: string
  error?: string
  className?: string
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    { label, placeholder, type = 'text', name, error, className, ...restProps },
    ref
  ) => {
    return (
      <FormField
        className={classNames(styles['input-group'], className)}
        error={error}
        name={name}
      >
        {label && <label className={styles['input-label']}>{label}</label>}
        <input
          {...restProps}
          className={styles['input-field']}
          name={name}
          placeholder={placeholder}
          ref={ref}
          type={type}
        />
      </FormField>
    )
  }
)

Input.displayName = 'Input'

export default Input
