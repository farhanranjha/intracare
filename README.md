## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Conventions Followed

### Folder Structure

- The project follows **service-based folder structure**, where components, services, and models are organized by feature.
- Each module has its own directory, containing all relevant components, services, and related files.

### Naming Conventions

- **Classes**: Use `PascalCase` for class names (e.g., `UserProfileComponent`).
- **Variables and Functions**: Use `camelCase` for variable and function names (e.g., `userName`, `fetchData`).
- **Constants**: Use `UPPER_CASE_SNAKE` format for constants (e.g., `API_ENDPOINT`).
- **Component Selectors**: Follow the `kebab-case` convention for component selectors (e.g., `patient-dashboard`). Use the `app-` prefix only for generic components.
- **Branch Names**: Branch names should follow the format of the issue’s ticket number (e.g., `INTRA-54`). For non-ticketed changes, use the prefix `feature/`, `fix/`, or `hotfix/` (e.g., `feature/add-patient`, `hotfix/readme-update`).

### Code Style

- **Interfaces**: If an interface is used in multiple places, define it in a dedicated `types` or `interfaces` directory.
- **Linting**: Use `Prettier` for consistent code formatting. Ensure **on-save** linting is enabled.
- **Component Selectors**: Rename component selectors appropriately. Use the `app-` prefix only for shared or global components, and prefer feature-specific naming for others.

### Commit Messages

- **Branch Naming**: Branch names should correspond to issue ticket numbers (e.g., `INTRA-54` in uppercase). If no ticket exists, use descriptive prefixes like `feature/`, `fix/`, or `hotfix/` (e.g., `feature/add-patient`, `hotfix/update-readme`).
- **Message Format**: Follow the conventional commits standard:
  - `feat`: Adding a new feature (e.g., `feat: add user authentication`).
  - `fix`: Fixing a bug (e.g., `fix: resolve login issue`).
  - `chore`: Miscellaneous tasks (e.g., `chore: update dependencies`).
  - Use lowercase for all commit messages.

### Comments

- **Inline Comments**: Add inline comments only when necessary, especially for complex or non-obvious logic.
- **JSDoc Comments**: Use JSDoc-style comments for functions, methods, and classes to enhance code readability and documentation.

### Styling

- **Tailwind CSS**: Use only **Tailwind's pre-defined sizes** for text, padding, margin, and rounded properties. Examples: `sm`, `base`, `lg`, etc.
- **Consistency**: Ensure consistent use of Tailwind's utility-first classes for maintaining a clean and maintainable styling structure.

### Additional Best Practices

- **DRY Principle**: Ensure the **Don’t Repeat Yourself (DRY)** principle is followed. Reuse services, models, and components where possible.
- **Single Responsibility Principle**: Each class or component should have a single responsibility. Split large components into smaller, reusable ones if necessary.
- **Version Control**: Regularly push changes to the repository, and make sure feature branches are merged with appropriate review and approval processes.
