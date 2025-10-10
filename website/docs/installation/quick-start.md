# Quick Start

Get up and running with AI-Terminal in just a few minutes.

## Prerequisites

Before installing AI-Terminal, make sure you have:

- A supported operating system (macOS, Linux, or Windows)
- Git installed on your system
- An API key from your preferred AI provider (OpenAI, Anthropic, etc.)

## Installation Methods

### Using the Install Script (Recommended)

The easiest way to install AI-Terminal is using our automated install script:

```bash
curl -fsSL https://raw.githubusercontent.com/your-org/ai-terminal/main/install.sh | bash
```

This script will:
- Detect your operating system and architecture
- Download the appropriate binary
- Install it to a directory in your PATH
- Set up basic configuration

### Using Package Managers

#### Homebrew (macOS/Linux)

```bash
brew tap your-org/ai-terminal
brew install ai-terminal
```

#### Scoop (Windows)

```bash
scoop bucket add ai-terminal https://github.com/your-org/ai-terminal
scoop install ai-terminal
```

### Manual Installation

1. Download the latest release from our [GitHub releases page](https://github.com/your-org/ai-terminal/releases)
2. Extract the binary to a directory in your PATH
3. Make the binary executable (Unix systems):
   ```bash
   chmod +x /path/to/ai-terminal
   ```

## Initial Setup

After installation, you need to configure your AI provider API key:

```bash
ai-terminal config set api-key YOUR_API_KEY
```

You can also set your preferred model:

```bash
ai-terminal config set model gpt-4
```

## Verify Installation

Check that AI-Terminal is installed correctly:

```bash
ai-terminal --version
```

## Next Steps

- Learn about [basic commands](../usage/basic-commands.md)
- Configure [advanced settings](../configuration/basic-configuration.md)
- Check [system requirements](system-requirements.md) for detailed compatibility information

## Need Help?

If you encounter any issues during installation, check our [troubleshooting guide](../troubleshooting/common-errors.md) or open an issue on GitHub.
