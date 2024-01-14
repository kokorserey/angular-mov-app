import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { response } from 'express';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angularhttp';
  private user: User = {
    id : 1,
    name: 'daravuth  ds',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address : {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //this.onGetUsers();
    //this.onCreateUser();
    this.onDeletehUser();
    this.onGetUsers();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.log('[response] onGetUsers :', response),
      (error: any) => console.log('[error]', error),
      () => console.log('[done] onGetUsers')
    );
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log('[response] getUser :', response),
      (error: any) => console.log('[error]', error),
      () => console.log('[done]onGetUsers' )
    );
  }

  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log('[response] getUser :', response),
      (error: any) => console.log('[error]', error),
      () => console.log('[done] onCreateUser')
    );
  }
  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log('[response] getUser :', response),
      (error: any) => console.log('[error]', error),
      () => console.log('[done] updateUser')
    );
  }
  onPatchUser(): void {
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log('[response] getUser :', response),
      (error: any) => console.log('[error]', error),
      () => console.log('[done] updateUser')
    );
  }
  onDeletehUser(): void {
    this.userService.deleteUser(1).subscribe(
      (response) => console.log('[response] onDeletehUser :', response),
      (error: any) => console.log('[error]', error),
      () => console.log('[done] onDeletehUser')
    );
  }
}
