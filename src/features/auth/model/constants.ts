export const SIGNIN_FORM_FIELDS = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
] as const

export const SIGNUP_FORM_FIELDS = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Create a password',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm your password',
    type: 'password',
  },
] as const
