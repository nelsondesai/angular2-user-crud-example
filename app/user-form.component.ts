import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup,Validators} from 'angular2/common';
import {CanDeactivate,Router,RouteParams} from 'angular2/router';
import {BasicValidators} from './basicValidators';
import {UserService} from './users.service';
import {Response} from 'angular2/http';
import {User} from './User';
@Component({
    templateUrl: 'app/user-form.component.html',
    providers:[UserService]
})
export class UserFormComponent implements CanDeactivate, OnInit {
    public users;
    form : ControlGroup;
    formTitle:string;
    user = new User();
    constructor(fb:FormBuilder,
    private _userService : UserService,
    private _router : Router,
    private _routerParams:RouteParams
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
    ngOnInit()
    {
         var id = this._routerParams.get('id');
         this.formTitle = id ? 'Edit User': 'New User';
         if(!id)
            return;

         this._userService.getUser(id)
         .subscribe(
             user => this.user = user,
             response => {
                if(response.status == 404)
                {
                    this._router.navigate(['NotFound']);
                }
             }
         );
         {

         }   
    }
    routerCanDeactivate()
    {
        if(this.form.dirty){
            return confirm("You have unsaved changes. Are you sure you want to navigate away?");
        }
    }

    save()
    {
       var result;
       if (this.user.id) 
             result = this._userService.updateUser(this.user);
         else
             result = this._userService.addUser(this.user)
             
 		result.subscribe(x => {
             // Ideally, here we'd want:
             // this.form.markAsPristine();
             this._router.navigate(['Users']);
         });
       
        this._userService.addUser(this.form.value)
        .subscribe(
            data => {
            this._router.navigate(['Users']); }
        );       
    }
}