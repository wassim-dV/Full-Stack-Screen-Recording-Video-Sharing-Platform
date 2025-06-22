'use client'

import FormFild from '@/components/FormFild'

import FileInput from '@/components/FileInput'
import React, { useState, ChangeEvent } from 'react'

import { useFileInput } from "@/lib/hooks/useFileInput";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";

const page = () => {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState<VideoFormValues>({
      title: "",
      description: "",
      tags: "",
      visibility: "public",
    });
    
     const video = useFileInput(MAX_VIDEO_SIZE);
     const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

     const onSubmit = async (e: FormEvent) => {
      e.preventDefault();
  
      setIsSubmitting(true);
  
      try {
        if (!video.file || !thumbnail.file) {
          setError("Please upload video and thumbnail files.");
          return;
        }
  
        if (!formData.title || !formData.description) {
          setError("Please fill in all required fields.");
          return;
        }
  
        // const {
        //   videoId,
        //   uploadUrl: videoUploadUrl,
        //   accessKey: videoAccessKey,
        // } = await getVideoUploadUrl();
  
        // if (!videoUploadUrl || !videoAccessKey)
        //   throw new Error("Failed to get video upload credentials");
  
        // await uploadFileToBunny(video.file, videoUploadUrl, videoAccessKey);
  
    //     const {
    //       uploadUrl: thumbnailUploadUrl,
    //       cdnUrl: thumbnailCdnUrl,
    //       accessKey: thumbnailAccessKey,
    //     } = await getThumbnailUploadUrl(videoId);
  
    //     if (!thumbnailUploadUrl || !thumbnailCdnUrl || !thumbnailAccessKey)
    //       throw new Error("Failed to get thumbnail upload credentials");
  
    //     await uploadFileToBunny(
    //       thumbnail.file,
    //       thumbnailUploadUrl,
    //       thumbnailAccessKey
    //     );
  
    //     await saveVideoDetails({
    //       videoId,
    //       thumbnailUrl: thumbnailCdnUrl,
    //       ...formData,
    //       duration: videoDuration,
    //     });
  
    //     router.push(`/video/${videoId}`);
    //   } catch (error) {
    //     console.error("Error submitting form:", error);
    //   } finally {
    //     setIsSubmitting(false);
    //   }
    // };

    const handleInputChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

  return (
    <div className='wrapper-md upload-page'>

        <h1>Upload A video</h1>

        {error && <div className="error-field">{error}</div>}
        <form
        className="rounded-20 gap-6 w-full flex flex-col shadow-10 px-5 py-7.5"
         onSubmit={onSubmit}  
         >
        
        <FormFild
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a clear and concise video title"
        />
<FormFild
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Briefly describe what this video is about"
          as="textarea"
        />

        <FileInput
          id="video"
          label="Video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
        />

        <FileInput
          id="thumbnail"
          label="Thumbnail"
          accept="image/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
        />

        <FormFild
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          as="select"
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
        />   
        
        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Uploading..." : "Upload Video"}
        </button>
        
        </form>

     
        

        
    
    </div>
  )
}

export default page