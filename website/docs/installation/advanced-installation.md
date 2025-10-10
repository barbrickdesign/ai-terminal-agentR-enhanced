# Advanced Installation

Advanced installation methods and customization options for AI-Terminal.

## Building from Source

### Prerequisites
- Go 1.21 or later
- Git
- Make (optional)

### Steps
```bash
git clone https://github.com/coding-hui/ai-terminal.git
cd ai-terminal
go build -o ai ./cmd/cli
```

### Custom Build Flags
```bash
# Build with specific tags
go build -tags=prod -o ai ./cmd/cli

# Build for specific platform
GOOS=linux GOARCH=amd64 go build -o ai ./cmd/cli
```

## Docker Installation

### Using Pre-built Image
```bash
docker pull codinghui/ai-terminal:latest
```

### Building Docker Image
```bash
git clone https://github.com/coding-hui/ai-terminal.git
cd ai-terminal
docker build -t ai-terminal .
```

### Running in Docker
```bash
docker run -it --rm \
  -v $(pwd):/workspace \
  -v ~/.config/ai-terminal:/root/.config/ai-terminal \
  codinghui/ai-terminal:latest
```

## Package Manager Installation

### Homebrew (macOS/Linux)
```bash
brew install coding-hui/tap/ai-terminal
```

### Scoop (Windows)
```bash
scoop bucket add coding-hui https://github.com/coding-hui/scoop-bucket
scoop install ai-terminal
```

## Development Installation

For contributing to AI-Terminal:

```bash
git clone https://github.com/coding-hui/ai-terminal.git
cd ai-terminal
make dev
```

## Configuration Management

### Multiple Configurations
You can maintain multiple configuration profiles:

```bash
# Use specific config file
ai --config ~/.config/ai-terminal/prod-config.yml

# Environment-specific setup
export AI_CONFIG=~/.config/ai-terminal/dev-config.yml
```

### Configuration Validation
```bash
ai config validate
```

## Updating AI-Terminal

### Update Methods
```bash
# Using Go
go install github.com/coding-hui/ai-terminal@latest

# Using Homebrew
brew update && brew upgrade ai-terminal

# Using Docker
docker pull codinghui/ai-terminal:latest
```

## Uninstallation

### Remove Binary
```bash
# If installed via Go
rm $(which ai)

# If installed via Homebrew
brew uninstall ai-terminal
```

### Remove Configuration
```bash
rm -rf ~/.config/ai-terminal
```

## Next Steps
- Learn about [Basic Configuration](../configuration/basic-configuration)
- Explore [Usage Examples](../examples/common-workflows)
