const EventEmitter =  require('events');
const clipboard = require('./build/Release/clipboard.node');

class ClipboardWatcher extends EventEmitter {
  constructor(interval = 500) {
    super();
    this.interval = interval;
    this.last = clipboard.getChangeCount();
    this.timer = setInterval(() => this.check(), this.interval);
  }

  check() {
    const now = clipboard.getChangeCount();
    if (now !== this.last) {
      this.last = now;
      this.emit('change', now);
    }
  }

  stop() {
    clearInterval(this.timer);
  }
}

// Example:

console.log('Testing clipboard module...');

try {
    const changeCount = clipboard.getChangeCount();
    console.log('Current clipboard change count:', changeCount);
    
    // Test multiple calls to see if it increments when clipboard changes
    console.log('Change count (call 1):', clipboard.getChangeCount());
    console.log('Change count (call 2):', clipboard.getChangeCount());
    
    console.log('✅ Clipboard module is working correctly!');
    console.log('💡 Try copying something to your clipboard and run this test again to see the change count increment.');
} catch (error) {
    console.error('❌ Error testing clipboard module:', error);
}

const watcher = new ClipboardWatcher();
watcher.on('change', (count) => console.log('Clipboard changed!', count));
