import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';


import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users/users.component';
import {UserFormComponent} from './users/user-form.component';
import {PostsComponent} from './posts/posts.component';
import{NotFoundComponent} from './not-found.component';

@RouteConfig([
    {   path:'/', name:'Home', component:HomeComponent, useAsDefault:true    },
    {   path:'/users', name:'Users', component:UsersComponent    },
    {   path:'/users/new', name:'NewUser', component:UserFormComponent    },
    {   path:'/users/:id', name:'EditUser', component:UserFormComponent    },
    {   path:'/posts', name:'Posts', component:PostsComponent    },
    {   path:'/*other', name:'Other', redirectTo:['Home']   },
    {   path:'/not-found', name:'NotFound', component:NotFoundComponent  }
])
@Component({
    selector: 'my-app',
    template: `<navbar></navbar>
               <div class="container">
                     <router-outlet></router-outlet>
                </div>
            `,
    directives:[NavbarComponent,ROUTER_DIRECTIVES]
})
export class AppComponent {    
}