export interface Project {
  id: number,
  projectName: string,
  projectDescription?: string,
  projectStartDate: Date,
  projectEndDate?: Date,
  projectUrl: URL,
  projectImage?: string
}
