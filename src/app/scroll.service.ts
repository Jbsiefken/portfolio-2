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
    let page: number = 0
    if (rect.top > vh * -0.25){
      page = 0;
    }
    else if(rect.top > vh * -0.66){
      page = 1
    }
    else {
      page = Math.floor((rect.top - vh * 0.33) / -vh) + 1;
    }
    if (page != this.currentPage.value){
      this.currentPage.next(page);
    }
   }
}
