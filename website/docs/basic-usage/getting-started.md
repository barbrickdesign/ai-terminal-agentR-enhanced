---
sidebar_position: 1
---

# Getting Started Guide

This guide will help you get up and running with AI-Terminal's core features quickly and efficiently.

## Installation & Setup

### Quick Installation
```bash
# Using Homebrew (recommended)
brew install coding-hui/tap/ai-terminal

# Or download from releases
# Visit: https://github.com/coding-hui/ai-terminal/releases
```

### Initial Configuration
After installation, run the configuration wizard:
```bash
ai configure
```

This will guide you through:
- Setting up your API keys (OpenAI, LocalAI, DeepSeek, etc.)
- Choosing default models
- Configuring git integration
- Setting up auto-commit preferences

## Core Features Overview

### Interactive Coding Environment
The most powerful feature of AI-Terminal is the interactive coding session:

```bash
ai coder
```

Once in the interactive session, you can use various commands:

#### Managing File Context
```bash
/add main.go                    # Add a single file
/add *.ts                       # Add all TypeScript files
/add src/                       # Add entire directory recursively
/add https://example.com/spec.json  # Add remote content
```

#### Code Generation & Modification
```bash
/coding "Add error handling to this function"
/coding "Refactor this to use async/await"
/coding "Write unit tests for this module"
```

#### Code Analysis & Q&A
```bash
/ask "How does this authentication system work?"
/ask "What improvements can be made to this code?"
```

#### Architecture & Design
```bash
/design "Design a REST API for this feature"
/design "Create a database schema for user management"
```

### Automated Commit Messages
Generate meaningful commit messages from your staged changes:

```bash
# Stage your changes first
git add .

# Generate commit message
ai commit

# With specific language and prefix
ai commit --lang zh-cn --prefix feat

# Preview before committing
ai commit --preview
```

### Natural Language Command Execution
Convert natural language to shell commands:

```bash
# Get command suggestions
ai exec "find all large log files older than 30 days"

# Execute with auto-confirmation
ai exec --yes "list all running Docker containers"

# The AI will refuse unsafe commands
ai exec "delete all files"  # Returns [noexec] for safety
```

## Common Development Workflows

### Feature Development Process
```bash
# 1. Start coding session
ai coder

# 2. Add relevant files
/add *.go
/add *.md

# 3. Implement feature
/coding "Add user authentication middleware"

# 4. Review and test
/ask "Are there any security issues in this implementation?"

# 5. Commit changes
/commit
```

### Code Review Process
```bash
# 1. Stage changes for review
git add .

# 2. Generate comprehensive commit message
ai commit --preview --no-confirm

# 3. Review the AI's analysis
# The AI provides:
# - Code review points
# - Commit title
# - Conventional commit prefix
# - Full commit message
```

### Learning & Codebase Exploration
```bash
# Load a codebase and ask questions
ai coder
/add project/
/ask "Explain the architecture of this application"
/ask "How can I add logging to this service?"
```

## Best Practices

### Effective Prompt Engineering
- **Be Specific**: Instead of "fix this", use "add null checks to handle edge cases"
- **Provide Context**: Load relevant files before asking questions
- **Iterate**: Build on previous responses with follow-up questions

### File Management Strategies
- **Start Small**: Add a few key files first, then expand as needed
- **Use Patterns**: Leverage glob patterns (`*.go`, `**/*.test.js`)
- **Remote Resources**: Load API specs, documentation, or examples from URLs

### Session Management
- **Use Clear Naming**: Save sessions with descriptive names
- **Leverage History**: Previous context improves subsequent responses
- **Clear When Needed**: Use `/clear` to start fresh when context becomes noisy

## Next Steps

Now that you understand the basics, explore:
- [Advanced Features](../category/advanced-features) for power-user capabilities
- [Configuration Guide](../configuration) to customize your setup
- [Troubleshooting Guide](../troubleshooting) for common issues and solutions
