import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
//projects: any;

projects = [
  { title: 'Project One', description: 'A great project', link: 'https://github.com/your_repo',name: '', icon: 'assets/springboot.svg' },
  { title: 'Project Two', description: 'Another great project', link: 'https://github.com/your_repo', name: '', icon: 'assets/springboot.svg'},
  { title: 'Project One', description: 'A great project', link: 'https://github.com/your_repo',name: '', icon: 'assets/springboot.svg' },
  { title: 'Project Two', description: 'Another great project', link: 'https://github.com/your_repo', name: '', icon: 'assets/springboot.svg'},

  
  // Add more as needed
];

}
