import { Component, OnInit } from '@angular/core';
import { EmailServiceService } from '../email-service.service';

@Component({
  selector: 'root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private emailService: EmailServiceService){
  }

  ngOnInit(): void {

  }

}
