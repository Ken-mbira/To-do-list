import { Component, OnInit, Input } from '@angular/core';

import { List } from '../list';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css']
})
export class ToDoDetailComponent implements OnInit {

  @Input() item: List;
  constructor() { }

  ngOnInit(): void {
  }

}
