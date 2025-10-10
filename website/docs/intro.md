---
sidebar_position: 1
---

# AI-Terminal Documentation

Welcome to the official documentation for **AI-Terminal** - your intelligent command-line companion that brings AI-powered assistance directly to your terminal.

## Overview

AI-Terminal is an advanced command-line interface enhanced with artificial intelligence to transform your development workflow. It integrates AI capabilities directly into your terminal, providing intelligent code generation, automated commit messages, smart command execution, and contextual assistance.

## Key Features

### 🤖 Interactive Coding
- **Multi-mode Interface**: Switch between chat (`/ask`), coding (`/coding`), and execution (`/exec`) modes
- **File Context Management**: Load files with `/add` command for context-aware operations
- **Real-time Code Editing**: Apply AI-generated code changes directly to your files
- **Auto-commit Integration**: Automatically commit changes after code generation

### 📝 Smart Commit Messages
- **Multi-stage Analysis**: Code review → Title generation → Prefix determination → Message creation
- **Language Support**: Generate commit messages in English, Chinese, Japanese, Portuguese, and Brazilian Portuguese
- **Conventional Commits**: Automatic prefix detection (feat, fix, docs, style, refactor, test, chore)
- **Flexible Attribution**: Configurable author/committer attribution for AI-generated changes

### 🔧 Intelligent Command Execution
- **OS-Aware Suggestions**: Commands tailored to your operating system and architecture
- **Safety First**: Built-in confirmation prompts and `[noexec]` responses for unsafe operations
- **Context Integration**: Leverages current user, OS info, and directory context

### 💬 Advanced Context Management
- **Pattern Matching**: Support for glob patterns and directory recursion
- **Remote Content**: Load and analyze content from URLs
- **Session Persistence**: Save and restore conversation contexts across sessions
- **Batch Operations**: Process multiple files and directories efficiently

## Getting Started

### Installation

**Homebrew (Recommended):**
```bash
brew install coding-hui/tap/ai-terminal
```

**Download Pre-built Binaries:**
Visit our [releases page](https://github.com/coding-hui/ai-terminal/releases) to download binaries for your platform.

**Build from Source:**
```bash
git clone https://github.com/coding-hui/ai-terminal.git
cd ai-terminal
make build
```

### Initial Setup

```bash
ai-terminal configure
```

This interactive setup will guide you through:
- API key configuration for your preferred AI provider
- Model selection and preferences
- Git integration settings
- Auto-commit and attribution preferences

### Quick Start Guide

1. **Launch Interactive Coding:**
   ```bash
   ai-terminal coder
   ```

2. **Add Files to Context:**
   ```bash
   /add main.go
   /add *.ts
   ```

3. **Generate Code:**
   ```bash
   /coding "Add error handling to this function"
   ```

4. **Commit Changes:**
   ```bash
   /commit
   ```

## Documentation Structure

- [Getting Started Guide](./basic-usage/getting-started) - Learn the fundamentals
- [Configuration Guide](./configuration) - Customize your setup

## Support & Community

- **Community Support**: Join [GitHub Discussions](https://github.com/coding-hui/ai-terminal/discussions)
- **Issue Reporting**: Report bugs on [GitHub Issues](https://github.com/coding-hui/ai-terminal/issues)
- **Contributing**: Check out our [Contributing Guide](https://github.com/coding-hui/ai-terminal/blob/main/CONTRIBUTING.md)
