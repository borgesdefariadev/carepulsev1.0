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

// Convert a File object to a URL usable by <Image src={...} />
export function convertFileToUrl(file: File | undefined | null): string {
  if (!file) return "/assets/images/placeholder.png";

  try {
    // createObjectURL works in browser; for server-side usage this will just return placeholder
    if (typeof window !== "undefined" && "URL" in window) {
      return URL.createObjectURL(file as Blob);
    }
  } catch (e) {
    // fallback
  }

  return "/assets/images/placeholder.png";
}

// Simple symmetric encryption helpers (placeholder implementations).
// These are small wrappers around base64 encoding/decoding to satisfy the app's usage.
export function encryptKey(value: string): string {
  // Cross-platform base64 encode (works in browser and Node)
  try {
    if (typeof window !== "undefined" && typeof window.btoa === "function") {
      // browser-safe base64
      return window.btoa(unescape(encodeURIComponent(value)));
    }
    // Node environment
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Buffer } = require("buffer");
    return Buffer.from(value, "utf-8").toString("base64");
  } catch {
    return value;
  }
}

export function decryptKey(value: string): string {
  try {
    if (typeof window !== "undefined" && typeof window.atob === "function") {
      return decodeURIComponent(escape(window.atob(value)));
    }
    // Node environment
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Buffer } = require("buffer");
    return Buffer.from(value, "base64").toString("utf-8");
  } catch {
    return value;
  }
}
