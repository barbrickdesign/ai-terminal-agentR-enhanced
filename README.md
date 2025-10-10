# AI-Terminal

[🇺🇸 English](./README.md) | [🇨🇳 中文](./README_zh.md) | [🇯🇵 日本語](./README_ja.md)

> Your intelligent command-line companion that transforms terminal workflows with AI-powered automation

AI-Terminal is an advanced command-line interface enhanced with artificial intelligence to help developers work smarter, not harder. It provides context-aware assistance, intelligent automation, and powerful code generation capabilities right in your terminal.

## ✨ Key Features

### 🤖 Interactive Coding Sessions
- **Multi-mode Interface**: Switch between chat (`/ask`), coding (`/coding`), and execution (`/exec`) modes
- **File Context Management**: Load files with `/add` command for context-aware operations
- **Real-time Code Editing**: Apply AI-generated code changes directly to your files
- **Auto-commit Integration**: Automatically commit changes after code generation

### 📝 Intelligent Commit Automation
- **Multi-stage Analysis**: Code review → Title generation → Prefix determination → Message creation
- **Language Support**: Generate commit messages in English, Chinese, Japanese, Portuguese, and Brazilian Portuguese
- **Conventional Commits**: Automatic prefix detection (feat, fix, docs, style, refactor, test, chore)
- **Flexible Attribution**: Configurable author/committer attribution for AI-generated changes

### 🔧 Smart Command Execution
- **OS-Aware Suggestions**: Commands tailored to your operating system and architecture
- **Safety First**: Built-in confirmation prompts and `[noexec]` responses for unsafe operations
- **Context Integration**: Leverages current user, OS info, and directory context

### 💬 Advanced File & Context Management
- **Pattern Matching**: Support for glob patterns and directory recursion
- **Remote Content**: Load and analyze content from URLs
- **Session Persistence**: Save and restore conversation contexts across sessions
- **Batch Operations**: Process multiple files and directories efficiently

## 🚀 Quick Start

### Prerequisites

- **Go 1.22.0 or later** (if building from source)
- **Git** installed and configured
- Terminal/Command Prompt access
- API access to supported AI providers

### Installation

**Homebrew (Recommended):**
```bash
brew install coding-hui/tap/ai-terminal
```

**Download Pre-built Binaries:**
Visit our [releases page][releases] to download binaries for:
- Linux (x86_64, arm64)
- macOS (Intel, Apple Silicon) 
- Windows

**Build from Source:**
```bash
git clone https://github.com/coding-hui/ai-terminal.git
cd ai-terminal
make build
```

### Initial Configuration

```bash
ai configure
```

This interactive setup will guide you through API key configuration and personal preferences.

## 📖 Usage Examples

### Interactive Coding Session
```bash
# Start interactive coding
ai coder

# In the session:
/add *.go                    # Add all Go files
/add https://example.com/api-spec.json  # Add remote content
/coding "Refactor these functions to use interfaces"
/commit                     # Auto-commit the changes
```

### Smart Commit Messages
```bash
# Stage your changes
git add .

# Generate commit with specific language and prefix
ai commit --lang zh-cn --prefix fix

# Preview before committing
ai commit --preview --no-confirm

# Amend previous commit
ai commit --amend
```

### Command Assistance & Execution
```bash
# Get command suggestions
ai exec "find all recently modified Go files and count lines"

# Execute with auto-confirmation
ai exec --yes "list all Docker containers and their status"

# Safe rejection for destructive operations
ai exec "rm -rf /"  # Returns [noexec] with reason
```

### File Analysis & Q&A
```bash
# Load files and ask questions
ai coder
/add package.json
/add src/
/ask "What dependencies are outdated and what are the alternatives?"
```

### Design & Architecture
```bash
ai coder
/add current-architecture.md
/design "Design a microservices architecture for this monolith"
```

## ⚙️ Configuration

### API Setup
Configure multiple AI providers in your config file:
```yaml
apis:
  openai:
    api-key: sk-...
    base-url: https://api.openai.com/v1
  localai:
    api-key: ""
    base-url: http://localhost:8080/v1
```

### Auto-coder Settings
```yaml
auto-coder:
  coding-model: gpt-4
  design-model: gpt-4
  auto-commit: true
  commit-prefix: feat
  coding-fences: ["```", "```"]
```

## 🏗️ Advanced Features

### Session Management
```bash
# Save current context
/save session-name

# List available sessions
/sessions

# Clear current conversation
/clear
```

### Diff and Apply Operations
```bash
# View formatted diffs
/diff

# Apply edit blocks directly
/apply "
<<<<<<< SEARCH
old code

