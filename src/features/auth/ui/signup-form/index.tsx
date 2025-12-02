import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Form from '@radix-ui/react-form'
import { Checkbox, CheckboxIndicator } from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'

import { Icon } from '@/shared/ui'
import {
  signUpSchema,
  type SignUpFormData,
} from '@/features/auth/model/schemas'
import styles from './styles.module.css'

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      acceptTerms: false,
    },
  })

  const onSubmit = async (data: SignUpFormData) => {
    console.log('Sign up data:', data)
    await new Promise(resolve => setTimeout(resolve, 1000))
    reset()
  }

  return (
    <div className={styles['signup-container']}>
      <div className={styles['signup-card']}>
        <div className={styles['logo-section']}>
          <h1 className={styles['logo']}>Crypto Exchange</h1>
          <p className={styles['subtitle']}>Create your account</p>
        </div>

        <Form.Root
          className={styles['signup-form']}
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
                placeholder="Create a password"
                type="password"
              />
            </Form.Control>
            {errors.password && (
              <Form.Message className={styles['error-message']}>
                {errors.password.message}
              </Form.Message>
            )}
          </Form.Field>

          <Form.Field className={styles['input-group']} name="confirmPassword">
            <Form.Label className={styles['input-label']}>
              Confirm Password
            </Form.Label>
            <Form.Control asChild>
              <input
                {...register('confirmPassword')}
                className={styles['input-field']}
                placeholder="Confirm your password"
                type="password"
              />
            </Form.Control>
            {errors.confirmPassword && (
              <Form.Message className={styles['error-message']}>
                {errors.confirmPassword.message}
              </Form.Message>
            )}
          </Form.Field>

          <Form.Field className={styles['terms-section']} name="acceptTerms">
            <div className={styles['checkbox-label']}>
              <Controller
                control={control}
                name="acceptTerms"
                render={({ field: { onChange, value, ...field } }) => (
                  <Checkbox
                    checked={value}
                    className={styles['checkbox']}
                    id="acceptTerms"
                    onCheckedChange={onChange}
                    {...field}
                  >
                    <CheckboxIndicator className={styles['checkbox-indicator']}>
                      <Icon name="checkmark" size={12} />
                    </CheckboxIndicator>
                  </Checkbox>
                )}
              />
              <Label className={styles['checkbox-text']} htmlFor="acceptTerms">
                I agree to the{' '}
                <button className={styles['terms-link']} type="button">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button className={styles['terms-link']} type="button">
                  Privacy Policy
                </button>
              </Label>
            </div>
            {errors.acceptTerms && (
              <Form.Message className={styles['error-message']}>
                {errors.acceptTerms.message}
              </Form.Message>
            )}
          </Form.Field>

          <Form.Submit asChild>
            <button className={styles['signup-button']} disabled={isSubmitting}>
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </Form.Submit>
        </Form.Root>

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
  )
}
