import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downvote',
  templateUrl: './downvote.component.html',
  styleUrls: ['./downvote.component.css']
})
export class DownvoteComponent implements OnInit {
  downvoteCount:number=0
  constructor() { }

  ngOnInit(): void {
  }
  countDownvote(){
    this.downvoteCount++
  }

}
