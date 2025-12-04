import Button from '@/shared/ui/button'
import styles from './styles.module.css'

interface IAuthToggleLink {
  text: string
  linkText: string
  onClick: () => void
}

export default function AuthToggleLink({
  text,
  linkText,
  onClick,
}: IAuthToggleLink) {
  return (
    <div className={styles['toggle-section']}>
      <p className={styles['toggle-text']}>
        {text}
        <Button
          className={styles['toggle-link']}
          type="button"
          onClick={onClick}
        >
          {linkText}
        </Button>
      </p>
    </div>
  )
}
