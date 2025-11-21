import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { Features } from "../features/features";

@Component({
  selector: 'app-home',
  imports: [Features],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
 private readonly elementRef = inject(ElementRef);
 
  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries =>
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'))
    );

    this.elementRef.nativeElement
      .querySelectorAll('.sec2')
      .forEach((sec: Element) => observer.observe(sec));
  }
}

