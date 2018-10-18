import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MultiTranslateHttpLoaderService } from '../core/multi-translate-http-loader.service';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new MultiTranslateHttpLoaderService(httpClient, [
    { prefix: 'assets/i18n/app/', suffix: '.json' },
    { prefix: 'assets/i18n/login/', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [ HttpClient ]
      },
      isolate: true
    }),
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }