import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet,RouterLink, Router } from '@angular/router';
import { Auth } from './service/auth';

@Component({
  imports: [RouterOutlet,RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('mesMedicaments');

  constructor(private authService: Auth, private router : Router){
    
  }


  ngOnInit() {
    let isloggedin: string;
    let loggedUser: string;
    isloggedin = localStorage.getItem('isloggedIn')!;
    loggedUser = localStorage.getItem('loggedUser')!;
    if (isloggedin != "true" || !loggedUser)
      this.router.navigate(['/login']);
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }

  onLogout(){
    this.authService.logout();
  }
}
