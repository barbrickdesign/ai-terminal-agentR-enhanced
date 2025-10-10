# System Requirements

Ensure your system meets the requirements for running AI-Terminal.

## Minimum Requirements

- **Operating System**: macOS 10.15+, Ubuntu 18.04+, Windows 10+
- **Memory**: 4GB RAM
- **Storage**: 100MB free space
- **Network**: Internet connection for AI API access

## Recommended Requirements

- **Operating System**: macOS 12+, Ubuntu 20.04+, Windows 11+
- **Memory**: 8GB RAM or more
- **Storage**: 500MB free space
- **Network**: Stable broadband connection

## Software Dependencies

### Required
- **Git**: Version 2.20.0 or later
- **Terminal**: A modern terminal emulator

### Optional
- **Go**: 1.21+ (if building from source)
- **Homebrew**: (for macOS/Linux installation)

## API Requirements

You'll need access to at least one AI provider:
- OpenAI API key
- Anthropic API key  
- Or other supported AI providers

## Verification

Check if your system meets the requirements:

```bash
# Check Git version
git --version

# Check available storage (Unix-like systems)
df -h

# Check memory (Unix-like systems) 
free -h
```

## Troubleshooting

If you encounter issues:
- Ensure you have write permissions in installation directories
- Verify network connectivity to AI API endpoints
- Check that your API keys are valid and have sufficient credits
