import {Component, OnInit} from 'angular2/core';
import {UserService} from './users.service';
import {RouterLink,Router} from 'angular2/router';

@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    providers:[UserService],
    directives:[RouterLink]
})
export class UsersComponent implements OnInit {
    users: any[];
    constructor(private _userService : UserService)
    {
    }
    ngOnInit(){
        this._userService.getUsers().subscribe(users => this.users = users);      
    }    
}