import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from 'src/models/Person';

@Injectable({
    providedIn: 'root'
})
export class AppStateStoreService {

    private updating$ = new BehaviorSubject<boolean>(false);
    private persons$ = new BehaviorSubject<Person[]>([{ id: 1, name: "Jane Doe" }, { id: 2, name: "John Doe" }, { id: 3, name: "Allan Poe" }]);

    isUpdating$() {
        return this.updating$.asObservable();
    }

    setUpdating(isUpdating: boolean) {
        this.updating$.next(isUpdating);
    }

    getPersons$() {
        return this.persons$.asObservable();
    }

    setPersons(persons: Person[]) {
        this.persons$.next(persons);
    }

    addPerson(person: Person) {
        const currentValue = this.persons$.getValue();
        this.persons$.next([...currentValue, person]);
    }

    updatePerson(updatedPerson: Person) {
        const persons = this.persons$.getValue();
        const indexOfUpdated = persons.findIndex(person => person.id == updatedPerson.id);
        persons[indexOfUpdated] = updatedPerson;
        this.persons$.next([...persons]);
    }

    updatePersonId(personToReplace: Person, addedPersonWithId: Person) {
        const persons = this.persons$.getValue();
        const updatedPersonIndex = persons.findIndex(person => person == personToReplace);
        persons[updatedPersonIndex] = addedPersonWithId;
        this.persons$.next([...persons]);
    }

    removePerson(personRemove: Person) {
        const currentValue = this.persons$.getValue();
        this.persons$.next(currentValue.filter(person => person != personRemove));
    }
}
