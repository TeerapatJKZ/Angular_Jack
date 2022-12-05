import { Component, EventEmitter, Output,Input } from '@angular/core';


@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.scss']
})
export class SerachComponent {
  movId:any;
  mID:any;
  // @Input() mId: string = '';
  // @Output() moId:EventEmitter<string> = new EventEmitter<string>();

  confirm(res:any) {
    this.mID = res;
    console.log(this.mID)
    
    
  }
}
