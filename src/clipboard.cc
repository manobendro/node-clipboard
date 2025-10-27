#include <napi.h>
#include "clipboard.h"

Napi::Value GetChangeCount(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    unsigned long count = getClipboardChangeCount();
    return Napi::Number::New(env, count);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set("getChangeCount", Napi::Function::New(env, GetChangeCount));
    return exports;
}

NODE_API_MODULE(clipboard, Init)
