import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  jobs = [
    { title: 'Software Engineer', company: 'Company A', description: 'Worked on various projects...' },
    { title: 'Frontend Developer', company: 'Company B', description: 'Focused on Angular development...' },
    // Add more as needed
  ];

}
