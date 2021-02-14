import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  currentPage: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    document.addEventListener('scroll', () => {
      this.getPage();
    })
   }

   getPage(): void{
    const vh = window.innerHeight;
    const rect = document.getElementById('top').getBoundingClientRect();
    if (rect.top <= 0 && rect.top > vh * -0.25){
      this.currentPage.next(0);
    }
    else if(rect.top > vh * -0.75){
      this.currentPage.next(1);
    }
    else {
      const quotient = Math.floor((rect.top - vh * 0.25) / -vh);
      this.currentPage.next(quotient);
    }
   }
}
