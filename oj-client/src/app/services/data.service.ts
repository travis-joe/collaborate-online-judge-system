import {Injectable} from '@angular/core';
import Problem from '../models/problem.model';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {HttpClient, HttpHeaders} from '@angular/common/http';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({providedIn: 'root'})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getProblems(): Observable<Problem[]> {
    return this.http.get<Problem[]>('api/v1/problems')
      .pipe(
      catchError(this.handleError('getProblems', []))
    );

  }


  getProblem(id: Number): Observable<any> {
    return this.http.get(`api/v1/problems/${id}`)
      .pipe(
        catchError(this.handleError('getProblem', []))
      );
  }

  addProblem(problem: Problem): Observable<any> {
    return this.http.post(`api/v1/problems`, problem, headers)
      .pipe(
        catchError(this.handleError('addProblem', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
