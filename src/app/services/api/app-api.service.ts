import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/models/Person';

@Injectable({
    providedIn: 'root'
})
export class AppApiService {

    readonly API = '/api/persons';

    //constructor(private http: HttpClient) {}

    // getPersons(): Observable<Person[]> {
    //   return this.http.get<Person[]>(this.API);
    // }

    // createPerson(person: Person): Observable<any> {
    //   return this.http.post(this.API, person);
    // }

    // updatePerson(person: Person): Observable<any> {
    //   return this.http.put(`${this.API}/${person.id}`, person);
    // }


    getPersons(): Observable<Person[]> {

        console.log("Persons requested with success");
        return new Observable<Person[]>();
    }

    createPerson(person: Person): Observable<any> {
        console.log("Persons created with success");
        return new Observable<any>();
    }

    updatePerson(person: Person): Observable<any> {
        console.log("Persons updated with success");
        return new Observable<any>();
    }
}
