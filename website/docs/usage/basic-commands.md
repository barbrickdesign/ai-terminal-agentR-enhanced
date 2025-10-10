---
sidebar_position: 1
---

# Basic Commands

Learn the fundamental commands to get started with AI-Terminal.

## Command Structure

```bash
ai [command] [flags] [arguments]
```

## Core Commands

### Interactive Coding
```bash
ai coder
```
Launch the interactive coding environment with file context management.

### Chat Mode
```bash
ai chat "How can I optimize this code?"
```
Have a conversation with AI about your code or development questions.

### Code Generation
```bash
ai code "Create a REST API endpoint in Go"
```
Generate code snippets based on your description.

### Git Assistance
```bash
ai commit
```
Generate intelligent commit messages based on your staged changes.

### Configuration
```bash
ai config set model gpt-4
ai config get model
```
Manage your AI-Terminal configuration settings.

## Common Flags

- `--model`: Specify which AI model to use
- `--temperature`: Control creativity (0.0 to 1.0)
- `--max-tokens`: Limit response length
- `--raw`: Output raw text without formatting
- `--quiet`: Reduce verbose output

## Getting Help

```bash
ai --help
ai [command] --help
```

## Interactive Mode Commands

When using `ai coder`, you can use these internal commands:

- `/add [file]` - Add files to the context
- `/coding [prompt]` - Generate or modify code
- `/commit` - Create a commit with AI-generated message
- `/ask [question]` - Ask questions about your code
- `/exec [command]` - Execute shell commands safely
- `/clear` - Clear the current context
- `/exit` - Exit interactive mode

Continue to [Interactive Coding](./interactive-coding) to learn about more advanced features.
