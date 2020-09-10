import { Component, OnInit } from '@angular/core';
import { Post } from '@app/_models';

@Component({
  selector: 'app-user-post-list',
  templateUrl: './user-post-list.component.html',
  styleUrls: ['./user-post-list.component.less']
})
export class UserPostListComponent implements OnInit {

  constructor() { }

  postList: Post[] = [];
  ngOnInit(): void {
    var data = localStorage.getItem('postList');
    if (data != null) {
      this.postList = JSON.parse(data);
    }
    // this.postList = this.postList.filter(function(x){
    //   return x.isAccept == true || x.isReject == true;
    // });
  }

}
