import { Component, OnInit } from '@angular/core';
import { Post } from '@app/_models';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.less']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }
  isRejectRes = false;
  postList: Post[] = [];
  rejectReason: string = "";
  ngOnInit(): void {
    var data = localStorage.getItem('postList');
    if (data != null) {
      this.postList = JSON.parse(data);
    }
  }
  accept(id) {
    this.postList.filter(function (x) {
      if (x.id == id) {
        x.isAccept = true;
      }
    });
    localStorage.setItem('postList', JSON.stringify(this.postList));
    console.log(this.postList);
  }
  reject(id) {
    let that = this;
    this.postList.filter(function (x) {
      if (x.id == id) {
        x.isReject = true;
        x.rejectionReason = that.rejectReason;
      }
    });
    localStorage.setItem('postList', JSON.stringify(this.postList));
  }
}
