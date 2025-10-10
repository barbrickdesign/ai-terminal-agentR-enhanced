---
sidebar_position: 3
---

# Command Execution

Convert natural language instructions into executable shell commands with AI-Terminal's smart command execution feature.

## Basic Usage

```bash
# Start interactive command mode
ai exec

# Or execute directly
ai exec "find all large log files older than 30 days"
```

## Interactive Mode

When you start interactive mode with `ai exec`, you can enter commands directly:

```bash
ai exec
> list all running Docker containers and their status
# AI suggests: docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
```

## Command Safety

AI-Terminal prioritizes safety and will refuse to execute potentially dangerous commands:

```bash
# Safe commands are executed or suggested
ai exec "clean up temporary files"
# Suggests: find /tmp -name "*.tmp" -type f -mtime +7 -delete

# Dangerous commands are rejected
ai exec "delete all files"
# Returns: [noexec] This command is too destructive and unsafe
```

## OS-Aware Suggestions

The AI considers your operating system and architecture when generating commands:

```bash
# On macOS/Linux
ai exec "show disk usage"
# Suggests: df -h

# On Windows
ai exec "show disk usage"  
# Suggests: wmic logicaldisk get size,freespace,caption
```

## Advanced Features

### Auto-Confirmation
Skip confirmation prompts for trusted commands:

```bash
ai exec --yes "list all Docker containers"
```

### Context Integration
Commands are tailored to your current environment:
- Current user and permissions
- Operating system and distribution
- Current working directory
- Available tools and utilities

## Common Use Cases

### File Management
```bash
ai exec "find all Go files modified in the last week"
ai exec "count lines of code in Python files"
ai exec "search for TODO comments in the codebase"
```

### System Monitoring
```bash
ai exec "show memory usage by process"
ai exec "monitor network connections"
ai exec "check disk space on all mounted drives"
```

### Development Tasks
```bash
ai exec "run tests for changed files only"
ai exec "format all code in the project"
ai exec "build the project with dependencies"
```

### Docker Operations
```bash
ai exec "list all Docker images with sizes"
ai exec "clean up unused Docker containers and images"
ai exec "show logs for all running containers"
```

## Configuration

### Execution Settings
```yaml
# In config.yml
auto-coder:
  prompt-prefix-exec: "You are a helpful terminal assistant that converts requests into safe, executable commands."
```

## Best Practices

### Be Specific
- ❌ "clean up files"
- ✅ "find and delete .log files older than 30 days in /var/log"

### Include Context
- Mention your operating system if relevant
- Specify file paths when known
- Include any constraints or requirements

### Safety First
- Always review commands before execution
- Use `--yes` flag only for trusted operations
- Test commands in a safe environment first

## Example Workflow

```bash
# Start with a general request
ai exec "I need to analyze my project's dependencies"

# AI might suggest multiple steps:
# 1. npm list --depth=0 (for Node.js projects)
# 2. go list -m all (for Go projects)
# 3. pip list (for Python projects)

# Refine based on your specific needs
ai exec "show outdated npm packages with their latest versions"
# Suggests: npm outdated

# Execute with confidence
ai exec --yes "update all npm packages to their latest versions"
# Suggests: npm update
```

Command execution makes your terminal smarter by understanding natural language and converting it into precise, safe shell commands tailored to your environment.
