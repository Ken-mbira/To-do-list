import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  @Output () isDone = new EventEmitter<boolean>();

  taskDone(done:boolean){
    this.isDone.emit(done)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
