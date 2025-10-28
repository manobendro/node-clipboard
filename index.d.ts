/**
 * Native clipboard module for Node.js
 */
declare module 'clipboard-changes' {
    /**
     * Get the current clipboard change count.
     * This value increments each time the clipboard content changes.
     * @returns The current change count
     */
    function getChangeCount(): number;
}

export { getChangeCount };