import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CashflowCategory } from 'src/models/CashflowCategory';

@Injectable({
    providedIn: 'root'
})
export class AppApiService {

    readonly API = '/api/cashflowCategories';

    //constructor(private http: HttpClient) {}

    // getCashflowCategories(): Observable<CashflowCategory[]> {
    //   return this.http.get<CashflowCategory[]>(this.API);
    // }

    // createCashflowCategory(category: CashflowCategory): Observable<any> {
    //   return this.http.post(this.API, category);
    // }

    // updateCashflowCategory(category: CashflowCategory): Observable<any> {
    //   return this.http.put(`${this.API}/${category.id}`, category);
    // }


    getCashflowCategories(): Observable<CashflowCategory[]> {

        console.log("CashFlowCategories requested with success");
        return new Observable<CashflowCategory[]>();
    }

    createCashflowCategory(category: CashflowCategory): Observable<any> {
        console.log("CashFlowCategories created with success");
        return new Observable<any>();
    }

    updateCashflowCategory(category: CashflowCategory): Observable<any> {
        console.log("CashFlowCategories updated with success");
        return new Observable<any>();
    }
}
