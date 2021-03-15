import { Component, OnInit, Input } from '@angular/core';
import { IProject } from './project';

@Component({
  selector: 'app-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.scss']
})
export class ProjectElementComponent implements OnInit {

  @Input() project: IProject
  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleActive(){
    this.active = !this.active;
  }

}
