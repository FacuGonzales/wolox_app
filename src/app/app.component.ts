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
    this.translate.setDefaultLang('ESP');
    this.translate.use('ESP');
    this.translate.addLangs(['ESP', 'ENG']);
    this.lang = this.translate.getLangs();
  }

  changeLang(lang: string){
    this.translate.use(lang);
  }
}
