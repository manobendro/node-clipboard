#include "clipboard.h"
#include <windows.h>
// Function to get the clipboard change count on Windows
unsigned long getClipboardChangeCount() {
    return GetClipboardSequenceNumber();
}
