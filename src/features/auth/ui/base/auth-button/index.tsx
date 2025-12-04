import styles from './styles.module.css'

interface IAuthButton {
  children: React.ReactNode
  disabled?: boolean
  type?: 'submit' | 'button'
}

export default function AuthButton({
  children,
  disabled,
  type = 'submit',
}: IAuthButton) {
  return (
    <button className={styles['auth-button']} disabled={disabled} type={type}>
      {children}
    </button>
  )
}
