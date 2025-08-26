# Better Next.js Starter

This is a Next.js 15 starter project designed for rapid development with a focus on modern web standards, robust authentication, and a clean architecture.

## Technologies Used

-   [Next.js 15](https://nextjs.org/)
-   [React](https://react.dev/)
-   [Shadcn UI](https://ui.shadcn.com/)
-   [Drizzle ORM](https://orm.drizzle.team/)
-   [LibSQL](https://libsql.org/)
-   [Better Auth](https://www.better-auth.com/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   pnpm (recommended package manager)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/emincangencer/better-nextjs.git
    cd better-nextjs
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

### Environment Variables

Create a `.env` file in the root of your project based on `.env.example` and fill in the necessary environment variables.

### Database Setup

This project uses Drizzle ORM with LibSQL. You'll need to generate migrations and push the schema to your database.

1.  Generate Drizzle migrations (after defining your schema in `src/db/schema.ts`):
    ```bash
    pnpm run db:generate
    ```

2.  Push the schema to your local database (or run migrations for production):
    ```bash
    pnpm run db:push
    ```

## Running the Application

To start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

In the project directory, you can run:

-   `pnpm run dev`: Starts the development server with Turbopack.
-   `pnpm run build`: Builds the application for production.
-   `pnpm run start`: Starts the production server.
-   `pnpm run lint`: Runs ESLint to check for code style issues.
-   `pnpm run typecheck`: Runs TypeScript compiler to check for type errors.
-   `pnpm run precheck`: Runs both ESLint and TypeScript checks.
-   `pnpm run db:generate`: Generates Drizzle migrations.
-   `pnpm run db:migrate`: Applies Drizzle migrations.
-   `pnpm run db:push`: Pushes the Drizzle schema to the database.

## Authentication

This project uses [Better Auth](https://www.better-auth.com/) for authentication. The flow is secured with:

-   **Server-Side Protected Routes:** Routes like `/dashboard` are protected on the server using Next.js Server Components and `better-auth`'s session validation.
-   **Middleware Redirection:** A `middleware.ts` file handles optimistic redirection, guiding users based on their authentication status.
-   **Secure Session Handling:** Sessions are validated server-side, ensuring robust security.
