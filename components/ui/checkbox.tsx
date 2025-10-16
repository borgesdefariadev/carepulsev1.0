"use client"

import * as React from "react"

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "checked" | "onChange">

interface CheckboxProps extends InputProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onCheckedChange, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        checked={!!checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className={className}
        {...props}
      />
    )
  }
)

Checkbox.displayName = "Checkbox"
