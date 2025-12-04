import * as Form from '@radix-ui/react-form'
import { forwardRef } from 'react'

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
      <Form.Field
        className={classNames(styles['input-group'], className)}
        name={name}
      >
        {label && (
          <Form.Label className={styles['input-label']}>{label}</Form.Label>
        )}
        <Form.Control asChild>
          <input
            {...restProps}
            className={styles['input-field']}
            placeholder={placeholder}
            ref={ref}
            type={type}
          />
        </Form.Control>
        {error && (
          <Form.Message className={styles['error-message']}>
            {error}
          </Form.Message>
        )}
      </Form.Field>
    )
  }
)

Input.displayName = 'Input'

export default Input
