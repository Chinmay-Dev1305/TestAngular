import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { UserPostListComponent } from './user-post-list/user-post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'user-post', component: UserPostListComponent },
            { path: 'create-post', component: CreatePostComponent },
            { path: 'admin-panel', component: AdminPanelComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }