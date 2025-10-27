{
  "targets": [
    {
      "target_name": "clipboard",
      "sources": [
        "src/clipboard.cc"
      ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').gyp\")"
      ],
      "conditions": [
        ["OS=='mac'", { 
          "sources": ["src/clipboard_mac.mm"],
          "xcode_settings": { 
            "OTHER_CPLUSPLUSFLAGS": ["-std=c++17", "-stdlib=libc++", "-fexceptions"],
            "OTHER_LDFLAGS": ["-framework", "AppKit"],
            "MACOSX_DEPLOYMENT_TARGET": "10.12",
            "GCC_ENABLE_CPP_EXCEPTIONS": "YES"
          } 
        }],
        ["OS=='win'", {
          "sources": ["src/clipboard_win.cc"],
          "msvs_settings": {
            "VCCLCompilerTool": {
              "ExceptionHandling": 1
            }
          }
        }]
      ],
      "defines": ["NAPI_CPP_EXCEPTIONS"],
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions" ]
    }
  ]
}
