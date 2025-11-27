import type { SVGProps, ComponentType } from 'react'

interface ISVGPIconProps extends SVGProps<SVGSVGElement> {
  name: string
  className?: string
  size?: number
  color?: string
  fill?: string
}

const icons = import.meta.glob('../../assets/icons/svg/*.svg', {
  eager: true,
  query: '?react',
  import: 'default',
}) as Record<string, ComponentType<SVGProps<SVGSVGElement>>>

export default function Icon({
  className,
  name,
  size,
  color = 'currentColor',
  ...restProps
}: ISVGPIconProps) {
  if (!name) {
    console.warn('Icon name is required')
    return null
  }

  const IconComponent = icons[`../../assets/icons/svg/${name}.svg`]

  if (!IconComponent) {
    console.warn(`Icon ${name} not found`)
    return null
  }

  return (
    <IconComponent
      className={className}
      color={color}
      height={size}
      width={size}
      {...restProps}
    />
  )
}
