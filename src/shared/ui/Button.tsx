import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline'
  className?: string
}

const variants = {
  default:
    'bg-primary text-white enabled:hover:bg-primary/90 disabled:bg-gray-300 disabled:text-gray-500',
  ghost: 'bg-transparent text-primary enabled:hover:bg-primary/10 disabled:text-gray-400',
  outline:
    'border border-primary text-primary enabled:hover:bg-primary/10 disabled:border-gray-300 disabled:text-gray-400',
}

export function Button({
  variant = 'default',
  className = '',
  disabled,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        'rounded-lg px-4 py-2 transition-colors duration-200',
        variants[variant],
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    />
  )
}
