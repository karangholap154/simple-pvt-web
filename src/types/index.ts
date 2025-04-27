export interface StudyNote {
  id: string;
  title: string;
  downloadUrl: string;
  branch: string;
  semester: number;
  youtubeUrl?: string;
}

export type Branch = 'Computer' | 'AIML' | 'Information Technology' | 'Mechanical' | 'Chemical';
export type Semester = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;