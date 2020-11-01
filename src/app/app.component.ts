import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  lang: string[] = [];

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.lang = this.translate.getLangs();
  }

  changeLang(lang: string){
    this.translate.use(lang);
  }
}
