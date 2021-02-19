import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { EmailServiceService } from '../email-service.service';
import {ScrollService } from '../scroll.service';
import { HeaderMessage } from '../header-message';

@Component({
  selector: 'root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  currentPage: number = 0;
  //each index of pageBools represents the true/false state of the page
  pageBools: boolean[] = [true, false, false, false, false]; 
  heading: string = "Hi, I'm Josh Siefken"
  footerStyle: string = "footer-yellow";
  hideWords: boolean = false;
  lastPage: number;

  constructor(private emailService: EmailServiceService,
              private scroll: ScrollService){
    scroll.currentPage.subscribe((res) => {
      console.log("current section: ", res);
      this.lastPage = this.currentPage;
      this.currentPage = res;
      this.changePage();
    });
  }

  ngOnInit(): void {

  }

  changePage(): void{
    if(!(this.currentPage == 0 && this.lastPage ==1) && 
    !(this.currentPage == 1 && this.lastPage == 0) &&
    !(this.currentPage == 0 && this.lastPage == 0)){
      this.hideWords = true;
    }
    setTimeout(() => {
      this.hideWords = false;
      switch(this.currentPage){
        case(0): this.heading = HeaderMessage.p0;
        this.footerStyle = "footer-yellow";
        break;
        case(1): this.heading = HeaderMessage.p1;
        this.footerStyle = "footer-yellow";
        break;
        case(2): this.heading = HeaderMessage.p2;
        this.footerStyle = "footer-magenta";
        break;
        case(3): this.heading = HeaderMessage.p3;
        this.footerStyle = "footer-green";
        break;
        case(4): this.heading = HeaderMessage.p4;
        this.footerStyle = "footer-blue";
        break;
      }
    }, 200);
    for(var page in this.pageBools){
      this.pageBools[page] = false     
    }
    this.pageBools[this.currentPage] = true;
  }


}
