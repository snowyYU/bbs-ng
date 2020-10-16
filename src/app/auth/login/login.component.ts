import { Component, OnInit } from '@angular/core';

interface User {
  username?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {};
  errorMsg: string = null;
  constructor() {}

  ngOnInit(): void {}
  login(): void {}
}
