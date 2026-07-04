"use client";

import { googleDriveEmbedUrl } from "@/lib/utils/media-path";
import type { ProjectVideo } from "@/lib/data/promotional-videos";
import { getLocalVideoSrc } from "@/lib/data/promotional-videos";
import { cn } from "@/lib/utils";

type ProjectVideoPlayerProps = {
  video: ProjectVideo;
  className?: string;
  autoPlay?: boolean;
};

function resolveDriveFileId(fileId: string): string {
  const match = fileId.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return match[1];
  return fileId.trim();
}

export function ProjectVideoPlayer({
  video,
  className,
  autoPlay = false,
}: ProjectVideoPlayerProps) {
  if (video.source === "local") {
    return (
      <video
        controls
        playsInline
        preload="metadata"
        poster={video.poster}
        autoPlay={autoPlay}
        className={cn("w-full rounded-xl bg-black", className)}
      >
        <source src={getLocalVideoSrc(video)} type="video/mp4" />
        Your browser does not support video playback.
      </video>
    );
  }

  const id = resolveDriveFileId(video.fileId);
  if (!id) {
    return (
      <div
        className={cn(
          "flex aspect-video items-center justify-center rounded-xl border border-dashed border-border bg-section-alt text-sm text-muted",
          className
        )}
      >
        Add a Google Drive file ID in lib/data/promotional-videos.ts
      </div>
    );
  }

  return (
    <iframe
      src={googleDriveEmbedUrl(id)}
      title={video.title}
      allow="autoplay; encrypted-media"
      allowFullScreen
      className={cn("aspect-video w-full rounded-xl border-0 bg-black", className)}
    />
  );
}
