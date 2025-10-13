import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Safely parse and re-stringify data to remove circular refs and make it JSON-safe
export function parseStringify<T>(data: T): T {
  return JSON.parse(JSON.stringify(data)) as T
}

// Minimal date/time formatter used by appointment actions. Returns an object with dateTime string.
export function formatDateTime(date: string | Date | number, timeZone?: string) {
  const d = new Date(date)
  try {
    const dateTime = d.toLocaleString(undefined, timeZone ? { timeZone } : undefined)
    return { dateTime }
  } catch {
    return { dateTime: d.toISOString() }
  }
}
