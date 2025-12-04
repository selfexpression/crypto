import * as Form from '@radix-ui/react-form'
import type { ReactNode } from 'react'

import { classNames } from '@/shared/lib'
import styles from './styles.module.css'

interface IFormFieldProps {
  name: string
  children: ReactNode
  error?: string
  className?: string
}

export default function FormField({
  name,
  children,
  error,
  className,
}: IFormFieldProps) {
  return (
    <Form.Field
      className={classNames(styles['form-field'], className)}
      name={name}
    >
      {children}
      {error && (
        <Form.Message className={styles['error-message']}>{error}</Form.Message>
      )}
    </Form.Field>
  )
}
