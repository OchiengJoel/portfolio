import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [
  //   trigger('fadeIn', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('6s', style({ opacity: 1 }))
  //     ])
  //   ])
  // ],

  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('{{duration}}ms', style({ opacity: 1 }))
      ], { params: { duration: 1000 } })  // Default duration of 1000ms
    ])
  ]
})
export class HomeComponent {

  @Input() duration: number = 4000;  // Default duration is 1000ms



}
