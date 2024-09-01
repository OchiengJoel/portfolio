import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('{{duration}}ms', style({ opacity: 1 }))
      ], { params: { duration: 1500 } })  // Default duration of 1000ms
    ])
  ]
})
export class AboutComponent {

}
