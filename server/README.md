# 🏠 Roommate Expense Wars (Reference Repo)

This is the production-ready reference implementation for the Roommate Expense Wars application. It specifically resolves the architectural and configuration flaws present in the starter repo.

## 📂 Key Improvements & Fixes

### 1. Hardened Configuration (Fail-Fast)
-   **Environment Discipline**: All secrets and ports are moved to `.env`.
-   **Startup Validation**: The application uses a dedicated configuration layer (`src/config/env.js`) that validates the presence of `PORT` and `DATABASE_URL` at boot time. If missing, the app crashes with a clear error message, preventing unpredictable runtime failures.
-   **Prisma Portability**: Implemented correct usage of `prisma.config.ts` to source the database connection from the environment.

### 2. Full Observability
-   **Morgan Integration**: Registered Morgan as middleware with environment-aware formatting (`dev` for local, `combined` for production).
-   **Request Traceability**: Every incoming request now has visibility into its method, route, status code, and latency, making debugging seamless.
*   **Structured Output**: Removed all scattered `console.log` calls in favor of middleware-driven logging.

### 3. Robust Error Discipline
-   **Centralized Error Handling**: All controller errors are delegated to a global error handler middleware via `next(err)`.
-   **Meaningful Responses**: API responses now include descriptive error messages (while omitting stack traces in production for security).
-   **Traceable Failures**: Server-side error logs now include stack traces and request context for faster reproduction of issues.

## 🛠 Setup Instructions

<pre>
1. cd server
2. npm install
3. cp .env.example .env (and set your DATABASE_URL)
4. Run npm run prisma:migrate
5. Run npm run dev to start the server
</pre>

---
*Created by the Advanced Agentic Coding Team.*
