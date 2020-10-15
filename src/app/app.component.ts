import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private acccountService: AccountService){}
  
  title = 'shop';

  isLogged(){
  return this.acccountService.isLoggedIn();
}

  logout(){
    this.acccountService.logOut();
  }
}
