# 🏠 Roommate Expense Wars (Full Stack Solution)

This is the production-ready reference implementation for the Roommate Expense Wars application. It demonstrates best practices for full-stack Node.js and React development.

## 📂 Project Structure

*   **/server**: Production-grade Express + Prisma backend.
    -   Secure environment configuration.
    -   Request logging with **Morgan**.
    -   Centralized error handling.
    -   Fail-fast startup validation.
*   **/client**: Modern React (Vite) frontend.
    -   **Glassmorphism** design system with responsive layouts.
    -   Environment-based API configuration.
    -   Robust error and loading states.
    -   Automatic data synchronization.

## 🚀 Enhancements Implemented

### 🎨 Frontend Excellence
-   **Aesthetics**: Used a vibrant dark-mode theme with translucent glass cards and Inter typography.
-   **Reliability**: Handled network errors and slow responses with clear UI feedback.
-   **Flexibility**: Used Vite's `import.meta.env` for API URLs, allowing for easy deployment.

### ⚙️ Backend Discipline
-   **Observability**: Integrated Morgan to track every HTTP request.
-   **Security**: Zero hardcoded secrets; all config is delegated to `.env` files.
-   **Correctness**: Validated the environment at boot time to prevent invalid states.

## 🛠 Setup Instructions

### 1. Backend Setup
<pre>
cd server
npm install
cp .env.example .env (and configure)
npm run prisma:migrate
npm run dev
</pre>

### 2. Frontend Setup
<pre>
cd client
npm install
npm run dev
</pre>

---
*Created by the Advanced Agentic Coding Team.*
