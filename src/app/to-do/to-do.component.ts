import { Component, OnInit } from '@angular/core';

import { List } from './../list';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  title ="Goals";
  todo: List[] = [
  {name:"Fill out form", id:1, description:"Fill this out or don't come morrow"},
  {name:"Do chores", id:2, description:"Do the dishes, wash the house"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
