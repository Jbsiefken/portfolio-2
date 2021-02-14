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

  constructor(private emailService: EmailServiceService,
              private scroll: ScrollService){
    scroll.currentPage.subscribe((res) => {
      console.log("current section: ", res)
    });
  }

  ngOnInit(): void {

  }

}
