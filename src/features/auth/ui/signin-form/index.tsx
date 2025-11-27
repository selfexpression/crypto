import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Form from '@radix-ui/react-form';
import { Checkbox, CheckboxIndicator } from '@radix-ui/react-checkbox';
import { Label } from '@radix-ui/react-label';

import {
  signInSchema,
  type SignInFormData,
} from '@/features/auth/model/schemas';
import styles from './styles.module.css';

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    console.log('Sign in data:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-card']}>
        <div className={styles['logo-section']}>
          <h1 className={styles['logo']}>Crypto Exchange</h1>
          <p className={styles['subtitle']}>Welcome back</p>
        </div>

        <Form.Root
          className={styles['login-form']}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Field className={styles['input-group']} name="email">
            <Form.Label className={styles['input-label']}>Email</Form.Label>
            <Form.Control asChild>
              <input
                {...register('email')}
                className={styles['input-field']}
                placeholder="Enter your email"
                type="email"
              />
            </Form.Control>
            {errors.email && (
              <Form.Message className={styles['error-message']}>
                {errors.email.message}
              </Form.Message>
            )}
          </Form.Field>

          <Form.Field className={styles['input-group']} name="password">
            <Form.Label className={styles['input-label']}>Password</Form.Label>
            <Form.Control asChild>
              <input
                {...register('password')}
                className={styles['input-field']}
                placeholder="Enter your password"
                type="password"
              />
            </Form.Control>
            {errors.password && (
              <Form.Message className={styles['error-message']}>
                {errors.password.message}
              </Form.Message>
            )}
          </Form.Field>

          <div className={styles['form-options']}>
            <div className={styles['checkbox-label']}>
              <Checkbox
                className={styles['checkbox']}
                id="remember"
                {...register('rememberMe')}
              >
                <CheckboxIndicator className={styles['checkbox-indicator']}>
                  <svg
                    fill="none"
                    height="12"
                    viewBox="0 0 12 12"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </CheckboxIndicator>
              </Checkbox>
              <Label className={styles['checkbox-text']} htmlFor="remember">
                Remember me
              </Label>
            </div>
            <button className={styles['forgot-link']} type="button">
              Forgot password?
            </button>
          </div>

          <Form.Submit asChild>
            <button className={styles['login-button']} disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </Form.Submit>
        </Form.Root>

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
