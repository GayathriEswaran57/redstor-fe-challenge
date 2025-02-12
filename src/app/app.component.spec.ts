import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { languageChoices } from 'src/assets/languageChoices';
import { RedstorToolBarComponent } from 'projects/redstor-components/src/lib/tool-bar/redstor-tool-bar.component';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

class MockTranslateService {
  currentLang = 'en';

  setDefaultLang(lang: string) {
    this.currentLang = lang;
  }

  use(lang: string) {
    this.currentLang = lang;
  }
}
class MockActivatedRoute {
  snapshot = {
    routeConfig: {}
  };
  params = of({}); 
}
describe('AppComponent', () => {
  let translateService: MockTranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[RouterTestingModule,RedstorToolBarComponent, TranslatePipe, BreadcrumbModule ],
      providers: [
        { provide: TranslateService, useClass: MockTranslateService },
        { provide: BreadcrumbService, useClass: BreadcrumbService},
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize languages from languageChoices', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.languages).toEqual(languageChoices);
  });

  it('should switch language when switchLanguage is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.switchLanguage('es');
    expect(translateService.currentLang).toBe('es');
  });
});
