import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  columns = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  constructor() { }

  ngOnInit(): void {
  }

}
