import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  hardSkills: Skill[] = [
    { id: 1, skillName: 'Skill 1', skillLevel: SkillLevel.Expert },
    { id: 2, skillName: 'Skill 2', skillLevel: SkillLevel.Advanced },
    { id: 3, skillName: 'Skill 3', skillLevel: SkillLevel.Basic },
    { id: 4, skillName: 'Skill 4', skillLevel: SkillLevel.Expert },
    { id: 5, skillName: 'Skill 5', skillLevel: SkillLevel.Intermediate },
    { id: 6, skillName: 'Skill 6', skillLevel: SkillLevel.Expert },
    { id: 7, skillName: 'Skill 7', skillLevel: SkillLevel.Advanced },
    { id: 8, skillName: 'Skill 8', skillLevel: SkillLevel.Intermediate },
    { id: 9, skillName: 'Skill 9', skillLevel: SkillLevel.Expert },
    { id: 10, skillName: 'Skill 10', skillLevel: SkillLevel.Basic },
  ];

  softSkills: Skill[] = [
    { id: 1, skillName: 'Skill 1', skillLevel: SkillLevel.Expert },
    { id: 2, skillName: 'Skill 2', skillLevel: SkillLevel.Advanced },
    { id: 3, skillName: 'Skill 3', skillLevel: SkillLevel.Basic },
    { id: 4, skillName: 'Skill 4', skillLevel: SkillLevel.Expert },
    { id: 5, skillName: 'Skill 5', skillLevel: SkillLevel.Intermediate },
    { id: 6, skillName: 'Skill 6', skillLevel: SkillLevel.Expert },
    { id: 7, skillName: 'Skill 7', skillLevel: SkillLevel.Advanced },
    { id: 8, skillName: 'Skill 8', skillLevel: SkillLevel.Intermediate },
    { id: 9, skillName: 'Skill 9', skillLevel: SkillLevel.Expert },
    { id: 10, skillName: 'Skill 10', skillLevel: SkillLevel.Basic },
  ]

  languages: Language[] = [
    {
      id: 1,
      languageName: "English",
      listeningLevel: SkillLevel.Basic,
      readingLevel: SkillLevel.Intermediate,
      writingLevel: SkillLevel.Intermediate,
      speakingLevel: SkillLevel.Basic
     },
    {
      id: 2,
      languageName: "Spanish",
      listeningLevel: SkillLevel.Basic,
      readingLevel: SkillLevel.Basic,
      writingLevel: SkillLevel.Basic,
      speakingLevel: SkillLevel.Basic
     },
    {
      id: 2,
      languageName: "Persian",
      listeningLevel: SkillLevel.Intermediate,
      readingLevel: SkillLevel.Advanced,
      writingLevel: SkillLevel.Intermediate,
      speakingLevel: SkillLevel.Basic
     },
    {
      id: 2,
      languageName: "French",
      listeningLevel: SkillLevel.Expert,
      readingLevel: SkillLevel.Expert,
      writingLevel: SkillLevel.Expert,
      speakingLevel: SkillLevel.Expert
     },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface Language {
  id: number,
  languageName: string,
  listeningLevel: SkillLevel,
  readingLevel: SkillLevel,
  writingLevel: SkillLevel,
  speakingLevel: SkillLevel
}

interface Skill {
  id: number,
  skillName: string,
  skillLevel: SkillLevel
}

enum SkillLevel {
  Basic = 25,
  Intermediate = 50,
  Advanced = 75,
  Expert = 100
}
