# Quick Start

Get up and running with AI-Terminal in just a few minutes.

## Prerequisites

Before installing AI-Terminal, make sure you have:

- A supported operating system (macOS, Linux, or Windows)
- Git installed on your system
- An API key from your preferred AI provider (OpenAI, Anthropic, etc.)

## Installation Methods

### Homebrew (Recommended for macOS/Linux)

```bash
brew install coding-hui/tap/ai-terminal
```

### Download Pre-built Binaries

Visit our [GitHub releases page](https://github.com/coding-hui/ai-terminal/releases) to download the latest binary for your platform.

### Build from Source

```bash
git clone https://github.com/coding-hui/ai-terminal.git
cd ai-terminal
make build
```

## Initial Setup

Run the interactive configuration wizard:

```bash
ai-terminal configure
```

This will guide you through:
- Setting up your AI provider API key
- Selecting your preferred model
- Configuring Git integration settings
- Setting up auto-commit and attribution preferences

### Manual Configuration (Alternative)

If you prefer manual configuration:

```bash
# Set API key
ai-terminal config set api-key YOUR_API_KEY

# Set preferred model
ai-terminal config set model gpt-4
```

## Verify Installation

Check that AI-Terminal is installed correctly:

```bash
ai-terminal --version
```

## First Steps

### Start Interactive Coding Session

```bash
ai-terminal coder
```

### Basic Commands in Interactive Mode

```bash
# Add files to context
/add main.go
/add *.ts

# Generate code
/coding "Add error handling to this function"

# Create commit message
/commit
```

## Next Steps

- Learn about [basic commands](../usage/basic-commands.md) for detailed command references
- Configure [advanced settings](../configuration/basic-configuration.md) to customize your experience
- Check [system requirements](system-requirements.md) for detailed compatibility information

## Need Help?

If you encounter any issues during installation:
- Check our [troubleshooting guide](../troubleshooting/common-errors.md)
- Open an issue on [GitHub](https://github.com/coding-hui/ai-terminal/issues)
- Join our community discussions
