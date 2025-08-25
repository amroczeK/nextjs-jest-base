# Development Rules & Best Practices

This directory contains comprehensive development rules and best practices for the Next.js + React + TypeScript + TailwindCSS + Jest project.

## File Structure

- **README.md** - This file, overview and navigation
- **core-principles.mdc** - SOLID principles, DRY, general coding standards
- **react-patterns.mdc** - React component patterns, hooks, state management
- **nextjs-guidelines.mdc** - Next.js 15 specific rules, App Router, API routes
- **styling-standards.mdc** - TailwindCSS guidelines and responsive design
- **fabricjs-guide.mdc** - Fabric.js V6 canvas library implementation
- **testing-standards.mdc** - Jest testing patterns and component testing
- **accessibility.mdc** - Accessibility standards and ARIA guidelines
- **code-quality.mdc** - Code style, performance, security, and validation
- **ai-instructions.mdc** - Instructions for AI assistants and validation workflow

## Quick Reference

### When to Use "use client"

- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs (`alert`, `localStorage`, etc.)
- React hooks (`useState`, `useEffect`, etc.)
- DOM manipulation with refs
- Canvas/WebGL libraries

### Validation Workflow

- **Always use `npm run build`** for validation
- **Never use `npm run dev`** for validation
- Resolve all build errors before considering features complete

### Key Principles

- Server Components by default, Client Components only when necessary
- TypeScript strict mode with proper interfaces
- Accessibility-first development
- Performance and user experience priority
- Comprehensive testing coverage
