import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Form from '@radix-ui/react-form'

import { Input, Button, Checkbox, FormField } from '@/shared/ui'
import {
  signUpSchema,
  type SignUpFormData,
} from '@/features/auth/model/schemas'
import { SIGNUP_FORM_FIELDS } from '@/features/auth/model/constants'
import AuthLayout from '../auth-layout'
import AuthToggleLink from '../auth-toggle-link'
import AuthButton from '../auth-button'
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

  const handleNavigateToSignin = () => {
    console.log('Navigate to signin')
  }

  return (
    <AuthLayout subtitle="Create your account" title="Crypto Exchange">
      <Form.Root
        className={styles['signup-form']}
        onSubmit={handleSubmit(onSubmit)}
      >
        {SIGNUP_FORM_FIELDS.map(field => (
          <Input
            key={field.name}
            {...register(field.name)}
            error={errors[field.name]?.message}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
          />
        ))}

        <FormField
          className={styles['terms-section']}
          error={errors.acceptTerms?.message}
          name="acceptTerms"
        >
          <Controller
            control={control}
            name="acceptTerms"
            render={({ field: { onChange, value, ...field } }) => (
              <Checkbox
                checked={value}
                id="acceptTerms"
                label={
                  <>
                    I agree to the{' '}
                    <Button className={styles['terms-link']} type="button">
                      Terms of Service
                    </Button>{' '}
                    and{' '}
                    <Button className={styles['terms-link']} type="button">
                      Privacy Policy
                    </Button>
                  </>
                }
                onCheckedChange={onChange}
                {...field}
              />
            )}
          />
        </FormField>

        <Form.Submit asChild>
          <AuthButton disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </AuthButton>
        </Form.Submit>
      </Form.Root>

      <AuthToggleLink
        linkText="Sign in"
        text="Already have an account?"
        onClick={handleNavigateToSignin}
      />
    </AuthLayout>
  )
}
