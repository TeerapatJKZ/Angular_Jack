
import { Component ,OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit{
  @Input() studentName:string = ""
  @Output() notify:EventEmitter<string> = new EventEmitter();
  constructor() {}
   ngOnInit() {}  

  onclick(){
    this.notify.emit("Teerapat ")
  }
  
}
