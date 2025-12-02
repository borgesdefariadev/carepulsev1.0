// Auto-generated shims for third-party modules and missing types used in the project

declare module "@sentry/nextjs" {
  const Sentry: any;
  export = Sentry;
}

declare module "@tanstack/react-table" {
  export type ColumnDef<TData = any, TValue = any> = any;
  export type Row<TData = any> = any;
  export const useReactTable: any;
  export const getCoreRowModel: any;
  export const getPaginationRowModel: any;
  export const flexRender: any;
}

declare module "@radix-ui/react-alert-dialog" { const e: any; export = e }
declare module "@radix-ui/react-checkbox" { const e: any; export = e }
declare module "@radix-ui/react-dialog" { const e: any; export = e }
declare module "@radix-ui/react-popover" { const e: any; export = e }
declare module "@radix-ui/react-radio-group" { const e: any; export = e }
declare module "@radix-ui/react-select" { const e: any; export = e }
declare module "@radix-ui/react-separator" { const e: any; export = e }
declare module "@radix-ui/react-label" { const e: any; export = e }

declare module "cmdk" { const Command: any; export { Command }; export default Command }

declare module "input-otp" { const OTPInput: any; const OTPInputContext: any; export { OTPInput, OTPInputContext } }

// Fallback for any other imports lacking types
declare module "*" {
  const value: any;
  export default value;
}
