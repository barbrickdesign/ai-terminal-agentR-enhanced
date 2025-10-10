---
sidebar_position: 1
---

# Basic Configuration

Configure AI-Terminal to work with your preferred settings.

## Configuration File Location

AI-Terminal uses a YAML configuration file located at:
- Linux/macOS: `~/.config/ai-terminal/config.yml`
- Windows: `%APPDATA%\ai-terminal\config.yml`

## Basic Settings

```yaml
# Default AI model to use
default-model: gpt-4

# Default AI provider API
default-api: openai

# Maximum tokens in responses
max-tokens: 4000

# Creativity level (0.0 to 1.0)
temperature: 0.7

# Maximum input characters
max-input-chars: 8000

# Auto-commit AI-generated changes
auto-commit: true
```

## Environment Variables

You can also use environment variables:

```bash
export AI_MODEL=gpt-4
export AI_API_KEY=your-api-key
export AI_TEMPERATURE=0.7
export AI_MAX_TOKENS=4000
```

## Interactive Configuration

Use the built-in configuration wizard:

```bash
ai configure
```

This will guide you through setting up:
- API keys for your preferred AI providers
- Default model selection
- Git integration preferences
- Auto-commit settings

## Model Configuration

Configure multiple AI models:

```yaml
models:
  gpt-4:
    api: openai
    max-input-chars: 8000
    aliases: [gpt4, gpt-4-turbo]
  claude-3-sonnet:
    api: anthropic  
    max-input-chars: 100000
    aliases: [claude, claude3]
```

## API Configuration

Set up different AI providers:

```yaml
apis:
  openai:
    base-url: https://api.openai.com/v1
    token: your-openai-api-key
  anthropic:
    base-url: https://api.anthropic.com
    token: your-anthropic-api-key
```
