import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = 'COJ';
  username = '';
  constructor(
    @Inject('auth') private auth,
  ) { }

  ngOnInit() {
  }
  login(): void {
    this.auth.login();
  }
}
