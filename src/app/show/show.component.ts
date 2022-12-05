import { Component, EventEmitter, Input,Output, } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
  constructor(private service:AppService){} //import constructor เพื่อดึงมาใช้

  @Input() movId1:string='' // รับค่าเข้ามา เก็บไว้ใน movId1 เพื่อเก็บ
  outData:any;
  @Output() shows:EventEmitter<any> = new EventEmitter<any>();
  Onclick(){
    this.service.getMovies(this.movId1).subscribe(res=>{ // เรียกใช้งานเมื่อทำการใช้ฟังก์ชัน onclick
      console.log(res)
      this.outData = res; 
      this.shows.emit(this.outData) //ใช้ emit เพื่อส่งค่าออก

    })
    
    // this.moId2 = newShow;
    // console.log(this.moId2)


    }


  }

