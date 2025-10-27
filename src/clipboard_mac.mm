#include "clipboard.h"
#import <AppKit/AppKit.h>

unsigned long getClipboardChangeCount() {
    NSPasteboard *pb = [NSPasteboard generalPasteboard];
    return pb.changeCount;
}
