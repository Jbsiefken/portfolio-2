import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { EmailServiceService } from '../email-service.service';
import {ScrollService } from '../scroll.service';

@Component({
  selector: 'root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  currentPage: number = 0;
  pageZero: boolean = true;
  pageOne: boolean = false;
  pageTwo: boolean = false;
  pageThree: boolean = false;
  pageFour: boolean = false;
  heading: string = "Hi, I'm Josh Siefken"

  constructor(private emailService: EmailServiceService,
              private scroll: ScrollService){
    scroll.currentPage.subscribe((res) => {
      console.log("current section: ", res);
      this.currentPage = res;
      this.changePage();
    });
  }

  ngOnInit(): void {

  }

  changePage(): void{
    switch(this.currentPage){
      case(0): this.heading = "Hi, I'm Josh Siefken";
      this.pageZero = true;
      this.pageOne = false;
      break;
      case(2): this.heading = "About me";
      this.pageOne = true;
      this.pageTwo = false;
      this.pageZero = false;
      break;
      case(3): this.heading = "Here are some things I've worked on";
      break;
      case(4): this.heading = "Thanks for stopping by";
      break;
    }
  }

}
