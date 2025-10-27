# Node.js Clipboard Native Module

A cross-platform Node.js native module that provides access to clipboard change detection functionality.

## Features

- Monitor clipboard changes by tracking the change count
- Cross-platform support (macOS and Windows)
- Built with Node-API (N-API) for stability across Node.js versions

## Installation

```bash
npm install
```

This will automatically build the native module using node-gyp.

## Usage

```javascript
const clipboard = require('./index.js');

// Get the current clipboard change count
const changeCount = clipboard.getChangeCount();
console.log('Clipboard change count:', changeCount);

// The change count increments each time the clipboard content changes
// You can poll this value to detect when the clipboard has been modified
```

## API

### `getChangeCount()`

Returns the current clipboard change count as a number. This value increments each time the clipboard content changes on the system.

**Returns:** `number` - The current change count

## Testing

Run the included test to verify the module is working:

```bash
npm test
```

Or run the test file directly:

```bash
node test.js
```

## Build Requirements

- Node.js with npm
- Python (for node-gyp)
- C++ compiler
- On macOS: Xcode Command Line Tools
- On Windows: Visual Studio Build Tools

## Platform Support

- **macOS**: Uses NSPasteboard API
- **Windows**: Uses GetClipboardSequenceNumber API

## License

ISC