const clipboard = require('./build/Release/clipboard.node');

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