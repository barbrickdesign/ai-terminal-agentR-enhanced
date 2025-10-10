# Common Errors

Solutions to frequently encountered errors in AI-Terminal.

## API Connection Issues

### "Failed to connect to API"
**Cause**: Network issues or incorrect API endpoint
**Solution**:
- Check your internet connection
- Verify the API base URL in configuration
- Ensure firewall isn't blocking connections

### "Invalid API key"
**Cause**: Incorrect or expired API key
**Solution**:
- Verify your API key in the configuration file
- Check if the API key has sufficient credits
- Regenerate the API key if necessary

## Configuration Errors

### "Configuration file not found"
**Cause**: Missing or misplaced config file
**Solution**:
- Run `ai configure` to create default configuration
- Check the config file path: `~/.config/ai-terminal/config.yml`

### "Invalid configuration format"
**Cause**: Malformed YAML in config file
**Solution**:
- Validate YAML syntax using online tools
- Check for missing quotes or incorrect indentation

## Model Errors

### "Model not found"
**Cause**: Unavailable or misspelled model name
**Solution**:
- Check available models in your API plan
- Verify model name spelling in configuration
- Update to a supported model

### "Context length exceeded"
**Cause**: Input exceeds model's maximum context
**Solution**:
- Reduce input size using `--max-input-chars` flag
- Split large files into smaller chunks
- Use models with larger context windows

## Git Integration Issues

### "Not a git repository"
**Cause**: Command run outside git repository
**Solution**:
- Navigate to a git repository directory
- Initialize git with `git init` if needed

### "No staged changes"
**Cause**: No files staged for commit
**Solution**:
- Stage files with `git add`
- Use `git status` to check staged files

## Performance Issues

### "Slow response times"
**Cause**: Network latency or large inputs
**Solution**:
- Check network connectivity
- Reduce input size
- Use faster models if available

### "High memory usage"
**Cause**: Large context or multiple sessions
**Solution**:
- Clear conversation history
- Restart the application
- Reduce context size

## Getting More Help

If these solutions don't resolve your issue:
1. Check the [FAQ](../faq) for additional solutions
2. Search [GitHub Issues](https://github.com/coding-hui/ai-terminal/issues)
3. Create a new issue with detailed error information
