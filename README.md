# NextFolio

NextFolio is a modern, responsive, and customizable personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project helps you showcase your work, skills, and experience effectively.

## Live View

Check out the live version of the portfolio at [https://ayroid.vercel.app](https://ayroid.vercel.app).

## Features

- **Next.js**: Framework for server-side rendering and static site generation.
- **TypeScript**: Type-safe development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Email Preview**: Preview email templates locally.
- **Responsive Design**: Optimized for various screen sizes.
- **Modern UI/UX**: Sleek and professional design.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm, yarn, pnpm, or bun (choose one package manager)

### steps
ss
1. Clone the repository:

    ```bash
    git clone https://github.com/Ayroid/NextFolio.git
    cd NextFolio
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Build for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/). Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

- `app/`: Main application code
- `data/`: Data files
- `emails/`: Email templates
- `prisma/`: Prisma ORM configurations
- `public/`: Static assets
- `schemas/`: GraphQL schemas
- `utils/`: Utility functions
- `next.config.mjs`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration

## Dependencies

- `@gsap/react`, `gsap`: For animations and transitions.
- `@hookform/resolvers`, `react-hook-form`: For form handling and validation.
- `@prisma/client`, `prisma`: For database interaction and ORM.
- `@radix-ui/themes`: UI component themes.
- `@react-email/components`, `@react-email/render`, `react-email`: For managing and rendering email templates.
- `@studio-freight/lenis`: Smooth scrolling effects.
- `axios`: For making HTTP requests.
- `next`, `react`, `react-dom`: Core libraries for building the application.
- `next-pwa`: For adding progressive web app capabilities.
- `nodemailer`: For sending emails.
- `react-hot-toast`: For toast notifications.
- `react-icons`: For using icons.
- `sharp`: For image processing.
- `zod`: For schema validation.

## DevDependencies

- `@types/node`, `@types/nodemailer`, `@types/react`, `@types/react-dom`: TypeScript type definitions.
- `cz-conventional-changelog`: For conventional commit messages.
- `eslint`, `eslint-config-next`: For linting and code quality.
- `postcss`: For CSS transformations.
- `prettier`, `prettier-plugin-tailwindcss`: For code formatting.
- `tailwindcss`: For utility-first CSS framework.
- `typescript`: For TypeScript support.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact [Ayroid](https://github.com/Ayroid).

---

This `README.md` provides a comprehensive overview of the NextFolio project, including setup instructions, features, project structure, dependencies, and more.
