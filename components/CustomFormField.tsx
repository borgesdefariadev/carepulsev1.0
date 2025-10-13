'use client'

import React from 'react'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldValues, Path } from 'react-hook-form'

interface CustomProps<T extends FieldValues = FieldValues> {
  control: Control<T>
  name: Path<T>
}

const CustomFormField = <T extends FieldValues = FieldValues>({ control, name }: CustomProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField