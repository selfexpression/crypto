import styles from './styles.module.css'

interface IAuthLayout {
  title: string
  subtitle: string
  children: React.ReactNode
}

export default function AuthLayout({ title, subtitle, children }: IAuthLayout) {
  return (
    <div className={styles['auth-container']}>
      <div className={styles['auth-card']}>
        <div className={styles['logo-section']}>
          <h1 className={styles['logo']}>{title}</h1>
          <p className={styles['subtitle']}>{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  )
}
