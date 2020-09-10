import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Post } from '@app/_models';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  base64textString: string;
  postList = [];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    var userId = localStorage.getItem('userId');
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }


    var data = localStorage.getItem('postList');
    var prev = JSON.parse(data);
    if (prev != null) {
      prev.forEach(element => {
        this.postList.push(element);
      });
    }

    var post: Post = {
      title: this.f.title.value,
      description: this.f.description.value,
      userId: parseInt(userId),
      image: this.base64textString,
      id: Math.floor((Math.random() * 100) + 1),
      isAccept: false,
      isReject: false,
      rejectionReason: ''
    };

    console.log('post', post)
    //this.postList.push(prev);
    this.postList.push(post);
    localStorage.setItem('postList', JSON.stringify(this.postList));
    alert('Post added');
    this.router.navigate(['/user/user-post']);
  }


  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString = ('data:image/png;base64,' + btoa(e.target.result));
  }
}
