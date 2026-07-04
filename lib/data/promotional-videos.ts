import {
  googleDriveEmbedUrl,
  publicVideoPath,
} from "@/lib/utils/media-path";

export type LocalProjectVideo = {
  id: string;
  title: string;
  source: "local";
  /** File inside public/promotional-video/ */
  filename: string;
  poster?: string;
};

export type GoogleDriveProjectVideo = {
  id: string;
  title: string;
  source: "google-drive";
  /** Google Drive file ID or full share URL */
  fileId: string;
};

export type ProjectVideo = LocalProjectVideo | GoogleDriveProjectVideo;

export function getVideoEmbedSrc(video: ProjectVideo): string | null {
  if (video.source === "local") {
    return publicVideoPath("promotional-video", video.filename);
  }
  const id = video.fileId.trim();
  if (!id) return null;
  return googleDriveEmbedUrl(
    id.includes("drive.google.com") ? id.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1] ?? id : id
  );
}

export function getLocalVideoSrc(video: LocalProjectVideo): string {
  return publicVideoPath("promotional-video", video.filename);
}

export const promotionalVideos: ProjectVideo[] = [
  {
    id: "promo-01",
    title: "Promotional Video 1",
    source: "google-drive",
    fileId:
      "https://drive.google.com/file/d/1T63eMSfwHvXdiyUPER3PwGE4bvmGyi_n/view?usp=drive_link",
  },
  {
    id: "promo-02",
    title: "Promotional Video 2",
    source: "google-drive",
    fileId:
      "https://drive.google.com/file/d/1PGgTsLH-5veF5VTc81mb8Z3Zyf2RknjB/view?usp=drive_link",
  },
  {
    id: "promo-03",
    title: "Promotional Video 3",
    source: "google-drive",
    fileId:
      "https://drive.google.com/file/d/1Cy0yRDQ5zKIqzNLu_BBn-glGcQGhDqWd/view?usp=drive_link",
  },
  {
    id: "promo-04",
    title: "Promotional Video 4",
    source: "google-drive",
    fileId:
      "https://drive.google.com/file/d/1WYD2ddktR5tVqeXKCora-yF91k71So_j/view?usp=drive_link",
  },
  {
    id: "promo-05",
    title: "Promotional Video 5",
    source: "google-drive",
    fileId:
      "https://drive.google.com/file/d/1sWQwZfjZmDb_YisI7JoSw2JNLo7A5dui/view?usp=drive_link",
  },
];
