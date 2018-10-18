import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  langs = ['zh-TW', 'en-US'];
  title = 'app';

  constructor(
    public translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.translateService.addLangs(this.langs);
    this.translateService.setDefaultLang('zh-TW');
  }
}
