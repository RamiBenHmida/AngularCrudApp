import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private _http: HttpClient) {}

  // Function to add a new person to the server
  addPerson(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/personen', data);
  }

  // Function to update an existing person on the server
  updatePerson(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/personen/${id}`, data);
  }

  // Function to fetch the list of persons from the server
  getPersonList(): Observable<any> {
    return this._http.get('http://localhost:3000/personen');
  }

  // Function to delete a person from the server by their ID
  deletePerson(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/personen/${id}`);
  }
}
