import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  @ViewChild('home') home!:ElementRef;
  @ViewChild('about') about!:ElementRef;
  @ViewChild('skills') skills!:ElementRef;
  @ViewChild('projects') projects!:ElementRef;
  @ViewChild('contact') contact!:ElementRef;

  // scrollToSection(section: string) {
  //   const element = this[section].nativeElement;
  //   element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // }

  // Define a method to handle scrolling
  scrollToSection(section: 'home' | 'about' | 'skills' | 'projects' | 'contact') {
    const element = this[section]?.nativeElement;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
