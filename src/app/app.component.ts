import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { slider } from './route.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slider,]
})
export class AppComponent implements OnInit{
  title = 'Angular-Resume-2022';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      this.authService.autoLogin();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

