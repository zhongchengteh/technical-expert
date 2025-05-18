
import { File } from "lucide-react";
import { cn } from "@/lib/utils";
import { files } from "@/lib/yaraEngine";

interface FileSelectorProps {
  selectedFile: number | null;
  onSelectFile: (fileId: number) => void;
}

export const FileSelector = ({ selectedFile, onSelectFile }: FileSelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg text-cyan-400 mb-2">Suspicious Files:</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {files.map((file, index) => (
          <div
            key={index}
            onClick={() => onSelectFile(index)}
            className={cn(
              "border border-gray-700 p-3 rounded-md cursor-pointer",
              "transition-all duration-300 hover:border-green-500/70 hover:bg-green-900/10",
              selectedFile === index ? "border-green-500 bg-green-900/20" : ""
            )}
          >
            <div className="flex items-start gap-3">
              <File className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <h4 className="font-medium text-white">{file.name}</h4>
                <p className="text-xs text-gray-400 mt-1">{file.size} | {file.type}</p>
                <div className="mt-2 text-xs text-gray-300">
                  <p>{file.description}</p>
                </div>
                {file.strings && (
                  <div className="mt-2 text-xs">
                    <p className="text-yellow-300">Notable strings:</p>
                    <div className="bg-black/50 p-1 mt-1 rounded border border-gray-800">
                      {file.strings.map((str, i) => (
                        <p key={i} className="text-gray-400">{str}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
