const path = require('path');

// Load the native module
const clipboard = require('./build/Release/clipboard.node');

module.exports = {
    /**
     * Get the current clipboard change count.
     * This value increments each time the clipboard content changes.
     * @returns {number} The current change count
     */
    getChangeCount: clipboard.getChangeCount
};