import styles from './styles.module.css';

export default function SignUpForm() {
  return (
    <div className={styles['signup-container']}>
      <div className={styles['signup-card']}>
        <div className={styles['logo-section']}>
          <h1 className={styles['logo']}>Crypto Exchange</h1>
          <p className={styles['subtitle']}>Create your account</p>
        </div>

        <form className={styles['signup-form']}>
          <div className={styles['input-group']}>
            <label className={styles['input-label']} htmlFor="email">
              Email
            </label>
            <input
              className={styles['input-field']}
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>

          <div className={styles['input-group']}>
            <label className={styles['input-label']} htmlFor="password">
              Password
            </label>
            <input
              className={styles['input-field']}
              id="password"
              placeholder="Create a password"
              type="password"
            />
          </div>

          <div className={styles['input-group']}>
            <label className={styles['input-label']} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className={styles['input-field']}
              id="confirmPassword"
              placeholder="Confirm your password"
              type="password"
            />
          </div>

          <div className={styles['terms-section']}>
            <label className={styles['checkbox-label']}>
              <input className={styles['checkbox']} type="checkbox" />
              <span className={styles['checkbox-text']}>
                I agree to the{' '}
                <button className={styles['terms-link']} type="button">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button className={styles['terms-link']} type="button">
                  Privacy Policy
                </button>
              </span>
            </label>
          </div>

          <button className={styles['signup-button']} type="submit">
            Create Account
          </button>
        </form>

        <div className={styles['signin-section']}>
          <p className={styles['signin-text']}>
            Already have an account?
            <button className={styles['signin-link']} type="button">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
