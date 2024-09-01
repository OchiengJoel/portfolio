import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('{{duration}}ms', style({ opacity: 1 }))
      ], { params: { duration: 4500 } })  // Default duration of 1000ms
    ])
  ]
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
