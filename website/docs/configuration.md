---
sidebar_position: 3
---

# Configuration Guide

Learn how to configure AI-Terminal to match your workflow and preferences.

## Configuration Methods

AI-Terminal can be configured through multiple methods:

### 1. Interactive Configuration (Recommended)
```bash
ai configure
```

This launches an interactive wizard that guides you through all essential settings.

### 2. Configuration File
The main configuration file is located at:
- **Linux/macOS**: `~/.config/ai-terminal/config.yml`
- **Windows**: `%APPDATA%\ai-terminal\config.yml`

### 3. Environment Variables
All settings can be overridden with environment variables prefixed with `AI_`:
```bash
export AI_MODEL=gpt-4
export AI_API=openai
export AI_TEMP=0.7
```

## Configuration Structure

Here's the complete configuration structure with examples:

```yaml
# Default model and API
default-model: gpt-3.5-turbo
default-api: openai

# AI behavior settings
temp: 0.7
max-tokens: 4000
max-input-chars: 16000
topp: 0.9
max-retries: 3

# Output formatting
format-as: markdown
word-wrap: 80
raw: false
quiet: false

# API Configuration
apis:
  openai:
    api-key: sk-...your-api-key...
    base-url: https://api.openai.com/v1
    models:
      gpt-4:
        max-input-chars: 32000
      gpt-3.5-turbo:
        max-input-chars: 16000
        
  localai:
    api-key: ""
    base-url: http://localhost:8080/v1
    models:
      local-model:
        max-input-chars: 8000

# Auto-coder settings
auto-coder:
  prompt-prefix-chat: "You are a helpful coding assistant..."
  prompt-prefix-exec: "You are a terminal assistant..."
  prompt-prefix-coding: "You are an expert software developer..."
  coding-model: gpt-4
  design-model: gpt-4
  auto-commit: true
  commit-prefix: feat
  coding-fences: ["```", "```"]
  commit-author-name: "ai auto coder"
  commit-author-email: "ai-auto-coder@ai-terminal"
  
# Data storage
datastore:
  type: sqlite
  cache-path: ~/.local/share/ai-terminal/cache
```

## Configuration Sections

### API Provider Setup
Configure multiple AI providers and their models:

```yaml
apis:
  openai:
    api-key: sk-...your-key...
    base-url: https://api.openai.com/v1
    models:
      gpt-4:
        max-input-chars: 32000
        aliases: [gpt4, gpt-4-turbo]
      gpt-3.5-turbo:
        max-input-chars: 16000
        
  azure-openai:
    api-key: ...azure-key...
    base-url: https://your-resource.openai.azure.com/
    api-version: 2023-05-15
    
  localai:
    api-key: ""
    base-url: http://localhost:8080/v1
```

### Auto-coder Configuration
Fine-tune the coding assistant behavior:

```yaml
auto-coder:
  # Model selection for different tasks
  coding-model: gpt-4
  design-model: gpt-4
  
  # Auto-commit behavior
  auto-commit: true
  commit-prefix: feat
  
  # Code block formatting
  coding-fences: ["```", "```"]
  
  # Git attribution
  commit-author-name: "Your Name"
  commit-author-email: "your-email@example.com"
  attribute-author: true
  attribute-committer: true
  attribute-co-authored-by: false
```

### Model-specific Configuration
Configure behavior for specific models:

```yaml
apis:
  openai:
    models:
      gpt-4:
        max-input-chars: 32000
        temperature: 0.7
        aliases: [gpt4, gpt-4-turbo]
      gpt-3.5-turbo:
        max-input-chars: 16000
        temperature: 0.5
```

## Security & API Keys

For enhanced security, you can use environment variables or command-based API key retrieval:

```yaml
apis:
  openai:
    api-key-env: OPENAI_API_KEY
    # or use a command
    api-key-cmd: "pass show openai/api-key"
```

## Configuration Examples

### Development Environment Setup
```yaml
default-model: gpt-4
default-api: openai
temp: 0.7
auto-coder:
  coding-model: gpt-4
  auto-commit: true
  commit-prefix: feat
```

### Cost-Optimized Setup
```yaml
default-model: gpt-3.5-turbo
temp: 0.3
max-tokens: 2000
auto-coder:
  auto-commit: false  # Manual review before committing
```

### Local AI Deployment
```yaml
default-model: local-model
default-api: localai
apis:
  localai:
    base-url: http://localhost:8080/v1
```

## Configuration Verification

Check your current configuration:
```bash
ai config show
```

Test your configuration with a simple query:
```bash
ai ask "test configuration"
```

## Troubleshooting

### Common Configuration Issues

1. **API Key Validation**
   ```bash
   # Check if API key is set
   echo $OPENAI_API_KEY
   
   # Test API connectivity
   ai ask "test" --verbose
   ```

2. **Configuration File Location**
   ```bash
   # Find config file location
   ai config show --path
   ```

3. **Reset Configuration**
   ```bash
   # Backup current config
   cp ~/.config/ai-terminal/config.yml ~/.config/ai-terminal/config.yml.backup
   
   # Reset to defaults
   ai config reset
   ```

For additional support, visit our [Troubleshooting Guide](../troubleshooting) or [GitHub Discussions](https://github.com/coding-hui/ai-terminal/discussions).
