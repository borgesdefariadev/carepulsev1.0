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


**Testing & QA**
- Manual checks:
	- Visit `GET /patients/[userId]/register` and ensure the register form pre-fills user data when available.
	- Upload an identification image in the register form and verify `identificationDocumentUrl` is created.
	- Use the admin table to view appointments and exercise appointment flows.
- Suggested automated tests:
	- Unit tests for `lib/utils.ts` (formatting, base64 helpers).
	- Integration tests for `lib/actions/*` using a mocked Appwrite client.

**Developer Shortcuts**
- Quick type-check:

```powershell
npx tsc --noEmit
```

- Run dev server and monitor logs:

```powershell
npm run dev


