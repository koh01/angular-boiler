import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';

export abstract class AbstractPage {

    constructor(protected title: Title, private titleName: string) {
        this.title.setTitle(titleName + '|' + environment.appName);
    }
}
