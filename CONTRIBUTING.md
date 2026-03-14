# Contributing to Play1 Frontend

Thank you for your interest in contributing to Play1 Frontend! We welcome contributions from the community and are grateful for your support in making this project better.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Quality Standards](#code-quality-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [Getting Help](#getting-help)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to rupesh.bisen2022@gmail.com.

## Ways to Contribute

There are many ways you can contribute to Play1 Frontend:

- **Report bugs** - Help us identify and fix issues
- **Suggest features** - Share ideas for new functionality
- **Improve documentation** - Enhance README, guides, or code comments
- **Fix bugs** - Submit pull requests to resolve open issues
- **Add features** - Implement new functionality
- **Review pull requests** - Help review and test changes from other contributors
- **Write tests** - Improve test coverage
- **Improve performance** - Optimize existing code

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, pnpm, or yarn package manager
- Git for version control
- A GitHub account

### Setup Development Environment

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**
   
   ```bash
   git clone https://github.com/YOUR_USERNAME/play1-frontend.git
   cd play1-frontend
   ```

3. **Add upstream remote**
   
   ```bash
   git remote add upstream https://github.com/rupeshbisen/play1-frontend.git
   ```

4. **Install dependencies**
   
   ```bash
   npm install
   ```

5. **Run the development server**
   
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view the application.

## Development Workflow

### Branching Strategy

- `main` - Production-ready code
- `dev` - Development branch for integration
- Feature branches - Named descriptively (e.g., `feature/live-scoring`, `fix/video-player-bug`)

### Creating a Feature Branch

```bash
# Ensure your main branch is up to date
git checkout main
git pull upstream main

# Create and switch to a new feature branch
git checkout -b feature/your-feature-name
```

### Making Changes

1. Make your changes in your feature branch
2. Test your changes locally
3. Ensure all quality checks pass (see [Code Quality Standards](#code-quality-standards))
4. Commit your changes (see [Commit Guidelines](#commit-guidelines))
5. Push to your fork
6. Open a pull request

## Code Quality Standards

Before submitting your changes, ensure they meet our quality standards:

### Run All Quality Checks

```bash
npm run quality
```

This command runs:
- Format checking with Prettier
- Type checking with TypeScript
- Linting with ESLint

### Individual Quality Checks

**Format Code**
```bash
# Check formatting
npm run format:check

# Auto-fix formatting
npm run format
```

**Type Check**
```bash
npm run type-check
```

**Lint Code**
```bash
# Run linter
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

**Build Project**
```bash
npm run build
```

### Code Style

- Follow the existing code style in the project
- Use TypeScript for type safety
- Follow React and Next.js best practices
- Write clean, readable, and maintainable code
- Add comments for complex logic
- Keep functions small and focused

## Commit Guidelines

We follow conventional commit messages for clarity and consistency. Commit messages are automatically validated using commitlint.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates
- `ci`: CI/CD configuration changes
- `revert`: Revert a previous commit

### Scopes

Scopes are optional but recommended for clarity. When used, they should be in lowercase.

### Examples

```bash
feat(scoring): Add real-time score updates via WebSocket

fix(video): Resolve HLS stream playback issue on mobile

docs(readme): Update installation instructions

chore(deps): Update Next.js to version 16.1.3

revert: fix(auth): remove broken authentication check
```

### Tips

- Use the imperative mood ("add" not "added" or "adds")
- Keep the subject line under 100 characters
- Use sentence case for the subject (not title case)
- Do not end the subject line with a period
- Separate subject from body with a blank line
- Use the body to explain what and why, not how
- Scopes are optional but help categorize changes

## Pull Request Process

### Before Submitting

1. ✅ Ensure all quality checks pass (`npm run quality`)
2. ✅ Build the project successfully (`npm run build`)
3. ✅ Test your changes thoroughly
4. ✅ Update documentation if needed
5. ✅ Rebase on the latest `main` or `dev` branch
6. ✅ Write clear commit messages

### Submitting a Pull Request

1. **Push your changes**
   
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a pull request**
   
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select the appropriate base branch (`main` or `dev`)
   - Fill out the PR template with:
     - Clear description of changes
     - Related issue numbers (e.g., "Closes #123")
     - Screenshots for UI changes
     - Testing performed

3. **Respond to feedback**
   
   - Address review comments promptly
   - Push additional commits to the same branch
   - Request re-review when ready

### Pull Request Guidelines

- Keep PRs focused on a single concern
- Link related issues
- Include screenshots for visual changes
- Ensure CI checks pass
- Be responsive to feedback
- Be patient and respectful

### PR Review Process

- At least one maintainer approval is required
- All CI checks must pass
- Conflicts must be resolved
- Code must meet quality standards

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Clear title** - Summarize the issue
- **Description** - Detailed explanation of the bug
- **Steps to reproduce** - How to recreate the issue
- **Expected behavior** - What should happen
- **Actual behavior** - What actually happens
- **Environment** - Browser, OS, Node.js version, etc.
- **Screenshots** - If applicable
- **Error messages** - Console errors or logs

### Feature Requests

When requesting features, please include:

- **Clear title** - Summarize the feature
- **Use case** - Why is this feature needed?
- **Proposed solution** - How should it work?
- **Alternatives considered** - Other approaches you've thought about
- **Additional context** - Mockups, examples, etc.

### Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested

## Getting Help

If you need help or have questions:

- 💬 [GitHub Discussions](https://github.com/rupeshbisen/play1-frontend/discussions) - Ask questions and discuss ideas
- 🐛 [GitHub Issues](https://github.com/rupeshbisen/play1-frontend/issues) - Report bugs or request features
- 📧 Email: rupesh.bisen2022@gmail.com - For private inquiries

## Recognition

Contributors will be recognized in our:
- GitHub contributors list
- Release notes for significant contributions
- Project documentation

## License

By contributing to Play1 Frontend, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

Thank you for contributing to Play1 Frontend! 🚀
