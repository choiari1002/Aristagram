"use client";

import { FileInput, TextInput, Button } from "@mantine/core";
import { getVisionZFile, useVisionZUpload } from "@visionz/upload-helper-react";
import { useState, useRef } from "react";
import Image from "next/image";
import { makeBrowserClient } from "@/utils/supabaseBrowserClient.utils";
import { redirect } from "next/navigation";

const UploadFormComponent = (userId) => {
  console.log(userId.userId);
  const [imageSrc, setImageSrc] = useState("");
  const { onFileChange, uploadSelectedFile, selectedFile } = useVisionZUpload("/api/upload");
  const feedContentRef = useRef<HTMLInputElement>(null);

  const supabase = makeBrowserClient();

  const uploadFile = async () => {
    try {
      const uploadId = await uploadSelectedFile();
      const fileUrl = await getVisionZFile("/api/upload", uploadId);
      setImageSrc(fileUrl);

      const { data, error } = await supabase.from("feeds").insert([
        {
          content: feedContentRef.current?.value || "",
          image_url: fileUrl,
          created_by: userId.userId,
        },
      ]);

      if (error) {
        console.error("error uploading feed:", error.message);
      } else {
        console.log("feed uploaded successfully:", data);
      }
    } catch (error) {
      console.error("error uploading file:", error.message);
    }
  };

  return (
    <div>
      <FileInput
        style={{ width: 500 }}
        accept={"image/*"}
        onChange={onFileChange}
        value={selectedFile}
      />
      <TextInput style={{ width: 500 }} placeholder={"content"} ref={feedContentRef} />
      <button onClick={uploadFile}>Upload</button>

      <div style={{ width: 500, height: 500, position: "relative" }}>
        {imageSrc && <Image src={imageSrc} alt={"test"} fill />}
      </div>
    </div>
  );
};

UploadFormComponent.displayName = "UploadForm";

export const UploadForm = UploadFormComponent;