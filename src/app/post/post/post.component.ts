import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  langs = ['zh-TW', 'en-US'];

  constructor(
    public translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.translateService.addLangs(this.langs);
    this.translateService.setDefaultLang('zh-TW');
  }

}
