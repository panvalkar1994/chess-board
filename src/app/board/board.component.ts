import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  rows = [0, 1, 2, 3, 4, 5, 6, 7];
  columns = [0, 1, 2, 3, 4, 5, 6, 7];
  x = 0;
  y = 0;
  constructor() { }

  ngOnInit(): void {
  }

  cellSelected(i:number, j:number) {
    this.x = i;
    this.y = j;
  }

}
