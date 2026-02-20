import DropZone from "react-dropzone";
import Image from "next/image";
import { Activity, useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { produce } from "immer";

interface FileWithPreview extends File {
  preview: string;
}

function MyDropZone() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const dropHandle = useCallback((acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
  }, []);

  const removeItem = useCallback((idx: number) => {
    URL.revokeObjectURL(files[idx].preview);
    setFiles(
      produce((draft) => {
        draft.splice(idx, 1);
      }),
    );
  }, []);

  return (
    <DropZone onDrop={dropHandle}>
      {({ getRootProps, getInputProps }) => (
        <div className="space-y-6">
          <Activity mode={files.length === 0 ? "visible" : "hidden"}>
            <div
              className="border-dotted p-4 border-2 w-lg mx-auto h-30 flex justify-center items-center cursor-pointer"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <p>Drag your images here.</p>
            </div>
          </Activity>

          <ul className="flex gap-2 flex-wrap justify-center">
            {files.map((file, idx) => (
              <li key={file.name}>
                <div className="relative">
                  <Button
                    variant="destructive"
                    className="absolute right-2 top-2 cursor-pointer rounded-none"
                    onClick={() => removeItem(idx)}
                  >
                    <Trash />
                  </Button>
                  <Image
                    src={file.preview}
                    height={200}
                    width={200}
                    alt={file.name}
                    className="object-cover w-full h-50"
                    unoptimized
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </DropZone>
  );
}

export default MyDropZone;
