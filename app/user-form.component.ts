import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup,Validators} from 'angular2/common';
import {CanDeactivate,Router} from 'angular2/router';
import {BasicValidators} from './basicValidators';
import {UserService} from './users.service';
import {Response} from 'angular2/http';

@Component({
    templateUrl: 'app/user-form.component.html',
    providers:[UserService]
})
export class UserFormComponent implements CanDeactivate {
    public users;
    form : ControlGroup;
    constructor(fb:FormBuilder,
    private _userService : UserService,
    private _route : Router
    )
    {
        this.form = fb.group({
            name:['',Validators.required],
            email:['', BasicValidators.email],
            phone:[],
            address: fb.group({
                street:[],
                suite:[],
                city:[],
                zipcode:[],
            })
        });
    }
    routerCanDeactivate()
    {
        if(this.form.dirty){
            return confirm("You have unsaved changes. Are you sure you want to navigate away?");
        }
    }

    save()
    {
        this._userService.addUser(this.form.value)
        .subscribe(
            data => {
            this._route.navigate(['Users']); }
        );       
    }
}