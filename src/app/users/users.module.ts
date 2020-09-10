import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { UserPostListComponent } from './user-post-list/user-post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        FormsModule
    ],
    declarations: [
        LayoutComponent,
        UserPostListComponent,
        CreatePostComponent,
        AdminPanelComponent
    ]
})
export class UsersModule { }