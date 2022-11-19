import { Grade } from '../enums/grade';
export interface Education {
  id: number,
  title: string,
  university: string,
  startDate: Date,
  endDate?: Date,
  gpa: number,
  location: string,
  grade: Grade
}
