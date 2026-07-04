/** Encode public folder paths so filenames with spaces work in URLs */
export function publicAssetPath(folder: string, filename: string): string {
  return `/${folder}/${encodeURIComponent(filename)}`;
}

/** @deprecated Use publicAssetPath */
export const publicImagePath = publicAssetPath;

export function publicVideoPath(folder: string, filename: string): string {
  return publicAssetPath(folder, filename);
}

/** Google Drive share/view URL → embed URL for iframe */
export function googleDriveEmbedUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

/** Extract file ID from a Google Drive share link, or return as-is if already an ID */
export function parseGoogleDriveFileId(urlOrId: string): string {
  const trimmed = urlOrId.trim();
  const match = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return match[1];
  const openMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (openMatch) return openMatch[1];
  return trimmed;
}
