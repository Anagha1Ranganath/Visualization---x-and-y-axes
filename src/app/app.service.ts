import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    private plotUrl = './app.db';

    constructor(
        private http: HttpClient) {
    }

    plot(user: any): Observable<any> {
        return this.http.get<any>(this.plotUrl, user);
    }
}
