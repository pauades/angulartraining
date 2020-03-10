import { Injectable } from '@angular/core';
import { Observable, of, throwError, concat } from 'rxjs';
import { Person } from 'src/models/Person';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppApiService {

    readonly API = '/api/persons';

    getPersons(): Observable < Person[] > {
        const mockApiObservable = of([{ id: 1, name: "Jane Doe" }, { id: 2, name: "John Doe" }, { id: 3, name: "Allan Poe" }]);
        return mockApiObservable;
    }
    
    createPerson(person: Person): Observable < any > {        
        //const mockApiObservable = of(person);
        debugger;
        const mockApiObservable = concat(throwError(new Error('oops! API Call failed')));
        return mockApiObservable;
    }
    
    updatePerson(person: Person): Observable < any > {        
        const mockApiObservable = of(person);
        debugger;
        //const mockApiObservable = concat(throwError(new Error('oops! API Call failed')));
        return mockApiObservable;        
    }
}

    // constructor(private http: HttpClient) { }

    // getPersons(): Observable<Person[]> {
    //     return this.http.get<Person[]>(this.API);
    // }

    // createPerson(person: Person): Observable<any> {
    //     return this.http.post(this.API, person);
    // }

    // updatePerson(person: Person): Observable<any> {
    //     return this.http.put(`${this.API}/${person.id}`, person);
    // }



