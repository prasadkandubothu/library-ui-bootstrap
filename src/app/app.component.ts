import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApphttpclientService } from './apphttpclient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'library';

  constructor(private _httpService : ApphttpclientService){
  }

  books : any;

  ngOnInit(): void {
    this._httpService.get("books").subscribe((res) => {
      this.books = res;
      console.log(res);
    });
    this._httpService.get("users").subscribe((res) => {
      console.log("users "+res);
    });
  }
}
