/** Encode public folder paths so filenames with spaces work in URLs */
export function publicImagePath(folder: string, filename: string): string {
  return `/${folder}/${encodeURIComponent(filename)}`;
}
