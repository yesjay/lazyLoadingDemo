import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  langs = ['zh-TW', 'en-US'];
  
  constructor(
    public translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.translateService.addLangs(this.langs);
    this.translateService.setDefaultLang('zh-TW');
  }

}
