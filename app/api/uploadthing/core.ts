import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs"; // For Clerk authentication
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// Updated middleware to handle authentication inline
export const ourFileRouter = {
  courseImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      // Inline authentication logic
      const { userId } = auth();
      if (!userId) {
        throw new UploadThingError("Unauthorized");
      }
      return { userId }; // Return metadata for onUploadComplete
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // Log upload details
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);

      // Optionally return metadata to the client
      return { uploadedBy: metadata.userId };
    }),

  courseAttachment: f({
    text: { maxFileSize: "10MB", maxFileCount: 10 },
    image: { maxFileSize: "10MB", maxFileCount: 10 },
    video: { maxFileSize: "1GB", maxFileCount: 5 },
    audio: { maxFileSize: "500MB", maxFileCount: 5 },
    pdf: { maxFileSize: "5MB", maxFileCount: 10 },
  })
    .middleware(async ({ req }) => {
      const { userId } = auth();
      if (!userId) {
        throw new UploadThingError("Unauthorized");
      }
      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Attachment upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);
    }),

  chapterVideo: f({
    video: {
      maxFileSize: "512GB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const { userId } = auth();
      if (!userId) {
        throw new UploadThingError("Unauthorized");
      }
      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Video upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
