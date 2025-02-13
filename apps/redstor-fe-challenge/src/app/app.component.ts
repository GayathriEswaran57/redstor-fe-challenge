import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { languageChoices } from '../assets/languageChoices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  languages: any;

  constructor(private translate: TranslateService) {
    this.languages = languageChoices;
    this.translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
