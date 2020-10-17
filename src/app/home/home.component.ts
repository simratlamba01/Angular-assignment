import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mission: any;
  missionList: [];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('https://api.spacexdata.com/v3/launches?limit=100').subscribe(Response => {
      console.log(Response);
      this.mission = Response;
      this.missionList = this.mission;
    });
  } 

}
