import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';

import * as defaultLanguage from '../assets/i18n/buang-en-US.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cookieService: CookieService,
              private translate: TranslateService) {
    let localeCode = this.cookieService.get('LSLanguage') || 'buang-es-ES';
    switch(localeCode) {
      case 'zz':
        localeCode = 'buang-es-ES';
        break;
    }
    translate.setTranslation('buang-es-ES', defaultLanguage);
    translate.setDefaultLang('buang-es-ES');
  }
}
