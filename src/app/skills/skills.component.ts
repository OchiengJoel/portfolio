import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'IT Software Support', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Spring Boot', level: 80 },
    { name: 'Angular', level: 75 },
    { name: 'HTML & CSS', level: 90 },
  ];

  techStack = [
    { name: '', icon: 'assets/java.svg' },
    { name: '', icon: 'assets/springboot.svg' },
    { name: '', icon: 'assets/angular.svg' },
    { name: '', icon: 'assets/typescript.svg' },
    { name: '', icon: 'assets/html-5.svg' },
    { name: '', icon: 'assets/javascript.svg' },
    // Add more as needed
  ];

}
