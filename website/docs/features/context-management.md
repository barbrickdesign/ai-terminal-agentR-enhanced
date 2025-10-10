---
sidebar_position: 4
---

# Context Management

AI-Terminal's context management system allows you to maintain conversation history, file contexts, and session states across multiple interactions.

## File Context Management

### Adding Files to Context

```bash
# Add individual files
/add main.go
/add config.yaml

# Add files using glob patterns
/add *.go
/add src/**/*.ts
/add tests/*.test.js

# Add entire directories (recursive)
/add src/
/add docs/

# Add remote content
/add https://raw.githubusercontent.com/example/api-spec.json
/add https://example.com/documentation.md
```

### Managing Loaded Contexts

```bash
# List all files in current context
/list

# Remove specific files
/remove main.go
/remove *.test.js

# Clear all context
/drop
```

## Session Persistence

### Conversation History
AI-Terminal automatically maintains conversation history within each session, allowing the AI to understand context from previous interactions.

### Saving and Restoring Sessions
```bash
# Save current session with a name
/save feature-auth-implementation

# List available sessions
/sessions

# Load a previous session  
/load feature-auth-implementation
```

### Session Storage
Sessions are stored in:
- **Linux/macOS**: `~/.local/share/ai-terminal/cache/`
- **Windows**: `%APPDATA%\ai-terminal\cache\`

## Context Types

### File Content
Local files are loaded with their full content, allowing the AI to analyze and modify code directly.

### Remote Resources
URLs are fetched and their content is added to the context, perfect for API specifications, documentation, or example code.

### Conversation History
Previous questions, answers, and code modifications are maintained to provide contextual understanding.

## Advanced Context Features

### Pattern Matching
Use powerful glob patterns to manage multiple files:
```bash
# All Go files except tests
/add *.go
/remove *_test.go

# All configuration files
/add *.yaml
/add *.yml
/add *.json

# Specific file types in nested directories
/add **/*.css
/add **/*.html
```

### Directory Recursion
When adding directories, AI-Terminal recursively processes all files within them, maintaining the directory structure in context.

### Content Validation
- Files are checked for existence and readability
- URLs are validated and fetched with proper error handling
- Large files are handled with appropriate chunking

## Best Practices

### Organizing Context
- **Start Small**: Begin with key files and expand as needed
- **Group Related Files**: Add files that work together
- **Remove Unnecessary Context**: Clean up files that are no longer relevant

### Session Management
- **Use Descriptive Names**: Save sessions with meaningful names
- **Regular Cleanup**: Remove old sessions to free up space
- **Backup Important Sessions**: Export critical session data

### Performance Considerations
- **Limit File Size**: Very large files may impact performance
- **Use Patterns Wisely**: Broad patterns can load many files
- **Monitor Memory Usage**: Large contexts use more memory

## Example Workflow

```bash
# Start a new coding session
ai coder

# Add project structure
/add package.json
/add src/
/add tests/

# Work on a feature
/coding "Implement user authentication"

# Save progress
/save auth-feature-in-progress

# Later, continue where you left off
ai coder
/load auth-feature-in-progress

# Add more context as needed
/add docs/authentication.md

# Continue development
/coding "Add password reset functionality"
```

## Configuration

### Cache Settings
```yaml
datastore:
  type: sqlite
  cache-path: ~/.local/share/ai-terminal/cache
```

### Auto-coder Settings
```yaml
auto-coder:
  # Context management behavior
  max-context-files: 50
  max-file-size: 1000000  # 1MB
```

Context management is the foundation of AI-Terminal's powerful capabilities, enabling sophisticated multi-file operations and maintaining coherent conversations across extended development sessions.
