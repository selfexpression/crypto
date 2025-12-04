import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { classNames } from '@/shared/lib'
import styles from './styles.module.css'

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  className?: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  onClick?: () => void
}

export default function Button({
  children,
  className,
  variant,
  size,
  fullWidth,
  onClick,
  ...restProps
}: IButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        className,
        fullWidth ? styles['full-width'] : '',
        variant ? styles[variant] : '',
        size ? styles[size] : ''
      )}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  )
}
