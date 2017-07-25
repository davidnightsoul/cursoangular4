import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  User
} from '../shared/models/user';
import {
  UserService
} from '../shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() userCreatedEvent = new EventEmitter();
  newUser: User;
  userService: UserService;
  existencia: boolean = false;
  active: boolean = true;
  users: Array < User > ;
  messageErrorForm: string;
  lexistencia: boolean = false;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  onSubmit() {
    this.existencia = false;
    this.users = [];
    this.userService.getUsers()
      .subscribe((resp) => {
        for (let u of resp) {
          if (u.name === this.newUser.name) {
            console.log("existe " + u.name);
            this.existencia = true;
          }
        }
        console.log(this.existencia);
        if (!this.existencia) {
          this.userService.saveUser(this.newUser)
            .subscribe(() => {
              this.userCreatedEvent.emit({
                user: this.newUser
              });
              this.active = false;
              this.newUser = new User("", "", "");
              setTimeout(() => {
                this.active = true;
              }, 0);
            });
        } else {
          this.userCreatedEvent.emit({
            user: this.newUser,
            error: "el name ya existe"
          });
        }
      });
  }





  //   test() {
  //    this.userService.getUsers().suscribe(
  //      (users) => {
  //        //validar
  //         this.userCreatedEvent.saveUser({user: this.newUser})
  //         .subscribe(()=>{
  //           this.userCreatedEvent.emit({user: this.newUser, error: null});
  //           this.active = false;
  //          this.newUser = new User("","","");
  //          setTimeout(() => {  this.active = true; }, 0);
  //         }
  //         )

  //      };
  //      //no es valido el ususario    
  //      this.userCreatedEvent.emit({user: this.newUser, error: "El usarname no es valido"});
  //  }

  ngOnInit() {
    this.newUser = new User("", "", "");
  }

}
