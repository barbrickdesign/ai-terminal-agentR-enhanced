---
sidebar_position: 1
---

# Interactive Coding Guide

The interactive coding feature is the heart of AI-Terminal, allowing you to generate, modify, and review code with AI assistance in real-time.

## Starting a Coding Session

```bash
ai coder
```

This launches an interactive session where you can use various commands to work with your codebase.

## Core Commands

### Managing File Context

```bash
# Add individual files
/add main.go
/add config.yaml

# Add multiple files using patterns
/add *.go
/add src/**/*.ts

# Add entire directories
/add src/
/add tests/

# Add remote content
/add https://example.com/api-spec.json
```

### Code Generation and Modification

```bash
# Generate new code
/coding "Create a REST API endpoint for user management"

# Modify existing code
/coding "Add error handling to this function"

# Refactor code
/coding "Refactor this to use dependency injection"

# Write tests
/coding "Write unit tests for this module"
```

### Code Analysis and Q&A

```bash
# Ask questions about your code
/ask "How does this authentication system work?"

# Get code review feedback
/ask "What improvements can be made to this code?"

# Understand architecture
/ask "Explain the data flow in this application"
```

### Architecture and Design

```bash
# Get architectural guidance
/design "Design a microservices architecture for this monolith"

# Database design
/design "Create a database schema for user management"

# API design
/design "Design a REST API for this e-commerce system"
```

## Auto-Commit Integration

When `auto-commit` is enabled in your configuration, AI-Terminal will automatically commit changes after code generation:

```yaml
# In config.yml
auto-coder:
  auto-commit: true
  commit-prefix: feat
```

You can also manually commit changes:
```bash
/commit
```

## Best Practices

### Effective Prompt Engineering
- **Be Specific**: Provide clear, detailed instructions
- **Include Context**: Load relevant files before making requests
- **Iterate**: Build on previous responses with follow-up questions

### File Management Strategies
- **Start Small**: Begin with key files and expand as needed
- **Use Patterns**: Leverage glob patterns for efficient file selection
- **Remote Resources**: Include API specs and documentation for better context

### Session Management
- **Save Progress**: Use session management to continue work later
- **Clear Context**: Use `/clear` when starting new tasks
- **Review Changes**: Always review AI-generated code before committing

## Example Workflow

```bash
# Start coding session
ai coder

# Load project files
/add package.json
/add src/
/add README.md

# Generate new feature
/coding "Add user authentication with JWT tokens"

# Review and test
/ask "Are there any security vulnerabilities in this implementation?"

# Commit changes
/commit
```

Interactive coding transforms your development workflow by providing AI-powered assistance directly in your terminal, making you more productive and efficient.
