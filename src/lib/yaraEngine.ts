
// File descriptions
export const files = [
  {
    id: 0,
    name: "suspicious_update.exe",
    size: "245 KB",
    type: "Win32 EXE",
    description: "Found in system32 directory. Modified timestamp doesn't match system logs.",
    strings: [
      "OpenProcessToken",
      "GetWindowsDirectory",
      "WriteFile",
      "RegisterServiceProcess",
    ]
  },
  {
    id: 1,
    name: "analytics_tool.exe",
    size: "1.2 MB",
    type: "Win32 EXE",
    description: "Unsigned executable with high entropy sections and obfuscated imports.",
    strings: [
      "OpenProcessToken",
      "NtQueryInformationProcess",
      "Cr/p0",
      "DebugActiveProcess",
      "IsDebuggerPresent",
    ]
  },
  {
    id: 2,
    name: "setup_wizard.exe",
    size: "3.7 MB",
    type: "Win32 EXE",
    description: "Found in temp directory with unusual network behavior and anti-analysis techniques.",
    strings: [
      "configthreadlocale",
      "l@Y2",
      "CreateFileMapping",
      "GetProcAddress",
    ]
  }
];

/**
 * Simulates checking if a file matches the YARA rule
 */
export const checkMatch = (fileId: number): boolean => {
  // File 1 is the only one that should match based on our criteria
  return fileId === 1;
};
