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
new List(1, "Feed Poppy", "Get meat if none, and give with water."),
new List(2, "Do Kata", "You have to increase your ranking")
  ];
  toggleDescription(index){
    this.todo[index].showDescription = !this.todo[index].showDescription;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
