import { SkillLevel } from "../enums/skill-level";

export interface Language {
  id: number,
  languageName: string,
  listeningLevel: SkillLevel,
  readingLevel: SkillLevel,
  writingLevel: SkillLevel,
  speakingLevel: SkillLevel
}
