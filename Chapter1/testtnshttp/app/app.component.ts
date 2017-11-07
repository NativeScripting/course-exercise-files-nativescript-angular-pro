import { Component } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MessageObject } from "./message-object.model";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    public myStr = 'nothing';

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('http://192.168.1.171:8080/api')
            .map(response => response.json())
            .subscribe((myMessageObject: MessageObject) => {
                console.log('RESPONSE RECEIVED');
                this.myStr = myMessageObject.message;
            });
    }
}
