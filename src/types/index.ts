export interface StudyNote {
  id: string;
  title: string;
  downloadUrl: string; // Maps to download_url in database
  branch: string;
  semester: number;
  youtubeUrl?: string; // Maps to youtube_url in database
}

export type Branch = 'Computer' | 'AIML' | 'Information Technology' | 'Mechanical' | 'Chemical';
export type Semester = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;