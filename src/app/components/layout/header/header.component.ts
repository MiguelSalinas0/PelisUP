import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogged: Observable<any> = this.authServie.afauth.user;

  constructor(private authServie: AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    return this.authServie.logout();
  }

}
