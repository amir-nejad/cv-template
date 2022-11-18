// Each work experience information
export interface WorkExperience {
  id: number,
  title: string,
  description: string,
  company: string,
  startDateTime: Date,
  endDateTime?: Date
}
