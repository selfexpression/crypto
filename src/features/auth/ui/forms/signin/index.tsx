import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Form from '@radix-ui/react-form'

import Button from '@/shared/ui/button'
import { Input, Checkbox, FormField } from '@/shared/ui'
import {
  signInSchema,
  type SignInFormData,
} from '@/features/auth/model/schemas'
import { SIGNIN_FORM_FIELDS } from '@/features/auth/model/constants'
import AuthLayout from '../../base/auth-layout'
import AuthToggleLink from '../../base/auth-toggle-link'
import AuthButton from '../../base/auth-button'
import styles from './styles.module.css'

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = async (data: SignInFormData) => {
    console.log('Sign in data:', data)
    await new Promise(resolve => setTimeout(resolve, 1000))
    reset()
  }

  const handleNavigateToSignup = () => {
    console.log('Navigate to signup')
  }

  return (
    <AuthLayout subtitle="Welcome back" title="Crypto Exchange">
      <Form.Root
        className={styles['login-form']}
        onSubmit={handleSubmit(onSubmit)}
      >
        {SIGNIN_FORM_FIELDS.map(field => (
          <Input
            key={field.name}
            {...register(field.name)}
            error={errors[field.name]?.message}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
          />
        ))}

        <div className={styles['form-options']}>
          <FormField error={errors.rememberMe?.message} name="rememberMe">
            <Checkbox {...register('rememberMe')} label="Remember me" />
          </FormField>
          <Button className={styles['forgot-link']} type="button">
            Forgot password?
          </Button>
        </div>

        <Form.Submit asChild>
          <AuthButton disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </AuthButton>
        </Form.Submit>
      </Form.Root>

      <AuthToggleLink
        linkText="Sign up"
        text="Don't have an account?"
        onClick={handleNavigateToSignup}
      />
    </AuthLayout>
  )
}
