import { Component } from '@angular/core';

import { Post } from '@app/_models';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  constructor() { }

  postList: Post[] = [];
  ngOnInit(): void {
    var data = localStorage.getItem('postList');
    if (data != null) {
      this.postList = JSON.parse(data);
      this.postList = this.postList.filter(function (x) {
        return x.isAccept == true || x.isReject == true;
      });
    }
  }
}