import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title : any;

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getHello().subscribe(
      (response: any) => {
        this.title = response.message;
      },
      (error) => {
        console.error('Error fetching hello message:', error);
      }
    );
  }
}
