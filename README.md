This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
**CarePulse v1.0 — Project README**

- **Project**: CarePulse (Next.js + TypeScript patient & appointment demo)
- 

**Overview**:
- **Purpose**: CarePulse is a lightweight patient intake and appointment management UI built with Next.js (App Router), React, and TypeScript. It demonstrates form validation with Zod + react-hook-form, file uploads, Appwrite-backed actions, and an admin data table.
- **This README** documents recent fixes and implementations, run instructions, troubleshooting steps, and a short roadmap for continuing work.

**Key Implementations & Fixes**
- **Form & Validation**: Harmonized `PatientFormDefaultValues` (`constants/index.ts`) with the `PatientFormValidation` schema to avoid mismatch on `name` vs `firstName/lastName`.
- **RegisterForm**: Fixed malformed JSX, improved typing with Zod, and improved file handling via `FileUploader` + `FormData`. File: `components/forms/RegisterForm.tsx`.
- **Zod + react-hook-form compatibility**: To avoid resolver/control generic mismatches, `useForm` generics were relaxed in some places and submit handlers were explicitly typed using `z.infer<typeof Schema>`.
- **Appwrite types**: Added `types/appwrite.types.ts` with a minimal `DocumentBase` and explicit `Patient`, `Appointment`, and action parameter types to decouple runtime data from `node-appwrite` Models.
- **Action return types**: Server actions in `lib/actions/*` were annotated with explicit returns (`Promise<Patient | undefined>`, etc.) so callers handle absence of data safely.
- **Utilities**: Implemented helpers in `lib/utils.ts`:
	- `convertFileToUrl(file)` — create usable URLs for images across server/client.
	- `encryptKey` / `decryptKey` — base64 wrappers (dev convenience; NOT secure encryption).
- **Type shims**: Added `types/shims.d.ts` with minimal module declarations (Sentry, Radix, TanStack table types, `cmdk`, `input-otp`) to unblock TypeScript compilation while migrating to proper types.
- **Table typing improvements**: Replaced broad `any` with a local `RowWrapper` and derived types in `components/table/*` to strengthen table typings incrementally.
- **Defensive pages**: Replaced unsafe non-null assertions with proper control flow (e.g., `notFound()` in `app/patients/[userId]/register/page.tsx`).

**How To Run (local dev)**
- **Prerequisites**: Node >= 18 (recommended), npm. Set Appwrite and Sentry env vars if you plan to integrate them.
- **Install deps**:

```powershell
npm install
```

- **Type-check** quickly:

```powershell
npx tsc --noEmit
```

- **Run dev server**:

```powershell
npm run dev
```

- **Build for production**:

```powershell
npm run build
npm start
```

**Important Files & Structure**
- `app/` — Next.js App Router pages (server + client components)
- `components/` — UI building blocks, forms, table, and primitives
- `lib/actions/` — server actions (Appwrite interactions)
- `lib/utils.ts` — shared helpers (formatting, base64 helpers, file-to-url)
- `types/` — global declarations (`appwrite.types.ts`, `shims.d.ts`)
- `constants/index.ts` — static lists (doctors, identification types)

**Env vars (examples)**
- `NEXT_PUBLIC_ADMIN_PASSKEY` — passkey for the admin modal (dev-only)
- Appwrite config in `lib/appwrite.config.ts`: `ENDPOINT`, `PROJECT_ID`, `DATABASE_ID`, `BUCKET_ID`

**Developer Insights & Rationale**
- **Shim then tighten**: Start with small shims for missing typings so the repo compiles; replace shims with accurate types or `@types/*` packages progressively.
- **Zod + react-hook-form**: If generic inference from `zodResolver` causes errors, omit the `useForm` generic and instead type the submit handler with `z.infer<typeof schema>` to stay type-safe without fighting the resolver.
- **Action typing**: Returning `Promise<T | undefined>` makes callers handle missing data explicitly and removes unsafe `any` assumptions.
- **Security note**: `encryptKey`/`decryptKey` are base64 utilities — not secure. Use Web Crypto or Node `crypto` and server-side validation for production secrets.

**Troubleshooting**
- Dev server error: missing Sentry config modules (errors from `instrumentation.ts`). Two quick remedies:
	- Add small shim files `sentry.server.config.ts` and `sentry.edge.config.ts` exporting no-ops.
	- Wrap optional imports in `instrumentation.ts` with `try { await import('./sentry.server.config') } catch {}` so missing files won't break dev.
- If `npx tsc --noEmit` fails: check `types/shims.d.ts` and install missing `@types/*` packages where available.
- If Appwrite actions fail: verify `lib/appwrite.config.ts` environment variables.

**Testing & QA**
- Manual checks:
	- Visit `GET /patients/[userId]/register` and ensure the register form pre-fills user data when available.
	- Upload an identification image in the register form and verify `identificationDocumentUrl` is created.
	- Use the admin table to view appointments and exercise appointment flows.
- Suggested automated tests:
	- Unit tests for `lib/utils.ts` (formatting, base64 helpers).
	- Integration tests for `lib/actions/*` using a mocked Appwrite client.

**Roadmap & Next Steps**
- Replace base64 passkey storage with HMAC/WebCrypto and server-side verification.
- Replace `types/shims.d.ts` entries with proper `@types` or hand-authored declarations for Radix, TanStack, and other libs.
- Centralize table types in `types/table.ts` and adopt TanStack official types.
- Add e2e tests (Playwright/Cypress) for the registration -> appointment flow.

**Developer Shortcuts**
- Quick type-check:

```powershell
npx tsc --noEmit
```

- Run dev server and monitor logs:

```powershell
npm run dev
# Watch the terminal for runtime errors
```

**Credits & Acknowledgments**
- Cleanups and README were implemented as part of a TypeScript hygiene pass to make the project more maintainable and easier to extend.

**License**
- No license included. Add a `LICENSE` file if you plan to open-source.

---
If you want, I can now:
- Add the `sentry.server.config.ts` and `sentry.edge.config.ts` shims to remove the dev-server block immediately, or
- Continue replacing other `any` occurrences with precise types following the same pattern used for tables and actions.

Which would you like next?
