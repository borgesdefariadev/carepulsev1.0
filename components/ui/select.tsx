"use client"

import * as React from "react"

interface SelectProps {
  children?: React.ReactNode
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export const Select = ({ children, defaultValue, onValueChange }: SelectProps) => {
  const [value, setValue] = React.useState<string | undefined>(defaultValue)

  React.useEffect(() => {
    if (defaultValue) setValue(defaultValue)
  }, [defaultValue])

  return (
    <div>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          onValueChange?.(e.target.value)
        }}
      >
        {children}
      </select>
    </div>
  )
}

export const SelectTrigger = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={className}>{children}</div>
)

export const SelectValue = ({ placeholder }: { placeholder?: string }) => (
  <span>{placeholder}</span>
)

export const SelectContent = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={className}>{children}</div>
)
