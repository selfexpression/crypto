import styles from './styles.module.css';

export default function SignInForm() {
  return (
    <div className={styles['login-container']}>
      <div className={styles['login-card']}>
        <div className={styles['logo-section']}>
          <h1 className={styles['logo']}>Crypto Exchange</h1>
          <p className={styles['subtitle']}>Welcome back</p>
        </div>

        <form className={styles['login-form']}>
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
              placeholder="Enter your password"
              type="password"
            />
          </div>

          <div className={styles['form-options']}>
            <label className={styles['checkbox-label']}>
              <input className={styles['checkbox']} type="checkbox" />
              <span className={styles['checkbox-text']}>Remember me</span>
            </label>
            <button className={styles['forgot-link']} type="button">
              Forgot password?
            </button>
          </div>

          <button className={styles['login-button']} type="submit">
            Sign In
          </button>
        </form>

        <div className={styles['signup-section']}>
          <p className={styles['signup-text']}>
            Don't have an account?
            <button className={styles['signup-link']} type="button">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
