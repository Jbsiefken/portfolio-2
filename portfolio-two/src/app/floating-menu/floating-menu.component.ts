import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss']
})
export class FloatingMenuComponent implements OnChanges {
  @Input() page: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes[0]){
      this.page = changes[0].currentValue;
    }
  }

}
