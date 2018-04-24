import { Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const createTranslationLoader = (http: Http) => {
    return new TranslateHttpLoader(<any>http, '/assets/i18n/', '.json');
};
