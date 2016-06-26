import {Component, OnInit} from 'angular2/core';
import {UserService} from './users.service';
import {RouterLink,Router, RouteParams} from 'angular2/router';

@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    providers:[UserService],
    directives:[RouterLink]
})
export class UsersComponent implements OnInit {
    users: any[];
    formTitle= 'Add a User';
    constructor(private _userService : UserService)
    {
          
    }
    ngOnInit(){
        this._userService.getUsers().subscribe(users => this.users = users);      
    }    
}