import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Features } from "../../features/features";

@Component({
  selector: 'app-home',
  imports: [Features],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
 private el = inject(ElementRef);
 s:number=0;

 
  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries =>
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'))
    );

    this.el.nativeElement
      .querySelectorAll('.sec2')
      .forEach((sec: Element) => observer.observe(sec));
      this.s=5;
      
  }
}
// Smooth fade-in when scrolling into view


