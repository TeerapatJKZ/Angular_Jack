import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit{
  school:string="Kasetsart"
  show:string = "";
  
  constructor() {} // คือการประกาศใช้ service
  ngOnInit() {}

  onclick(show:string) {
    this.show = show;
  }

}
