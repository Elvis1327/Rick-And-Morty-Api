import { Component, OnInit } from '@angular/core';
import { RickApiService } from '../../services/rickApi.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  data: any
  constructor(private _serivce: RickApiService){
    this._serivce.getRickApi().subscribe((res)=>{
      this.data = res;
      console.log(this.data)
    })
  }

  ngOnInit(){
  }
}
