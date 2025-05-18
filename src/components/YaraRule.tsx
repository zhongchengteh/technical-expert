
export const YaraRule = () => {
  return (
    <div className="my-6 border border-yellow-500/30 rounded-lg overflow-hidden shadow-lg animate-fade-in">
      <div className="bg-zinc-900 text-white p-4">
        <h3 className="text-lg text-yellow-300 mb-2">YARA Rule Template</h3>
        
        <div className="font-mono text-sm overflow-auto bg-black/50 p-4 rounded">
<pre className="text-gray-300">
{`rule picoCTFYara
{
meta:
    description = "Detects the flag inside the executable"

strings:
    // Original set
    $s2 = {4d 5a 90 00} // MZ header
    $s3 = "OpenProcessToken"
    $s4 = "configthreadlocale" wide ascii

    // Malware-specific strings
    $str1 = "Cr/p0" ascii wide
    $str2 = "l@Y2" ascii wide
    $str3 = "NtQueryInformationProcess" ascii wide
    $str4 = "DebugActiveProcess" ascii wide

condition:
    2 of ($str*) and 1 of ($s*)
}`}
</pre>
        </div>
        
        <div className="mt-4 text-sm">
          <p className="text-gray-400">
            <span className="text-yellow-300">HINT:</span> This rule will match files that contain at least 2 of the malware-specific strings AND at least 1 of the original set strings.
          </p>
        </div>
      </div>
    </div>
  );
};
