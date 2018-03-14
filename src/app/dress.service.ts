import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Dress } from './dress';
import { DRESSES } from './mock-dresses';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DressService {

  private dressesUrl = 'api/dresses';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  /** GET dresses from the server */
  getDresses (): Dress[] {
   // console.log("Hi")
   return DRESSES;
    // return this.http.get<Dress[]>(this.dressesUrl)
    //   .pipe(
    //     tap(dresses => this.log(`fetched dresses`)),
    //     catchError(this.handleError('getDresses', []))
    //   );
  }

  /** GET dress by id. Return `undefined` when id not found */
  getDressNo404<Data>(id: number): Observable<Dress> {
    const url = `${this.dressesUrl}/?id=${id}`;
    return this.http.get<Dress[]>(url)
      .pipe(
        map(dresses => dresses[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} dress id=${id}`);
        }),
        catchError(this.handleError<Dress>(`getDress id=${id}`))
      );
  }

  /** GET dress by id. Will 404 if id not found */
  getDress(id: number): Observable<Dress> {
    const url = `${this.dressesUrl}/${id}`;
    return this.http.get<Dress>(url).pipe(
      tap(_ => this.log(`fetched dress id=${id}`)),
      catchError(this.handleError<Dress>(`getDress id=${id}`))
    );
  }

  /* GET dresses whose name contains search term */
  searchDresses(term: string): Observable<Dress[]> {
    if (!term.trim()) {
      // if not search term, return empty dress array.
      return of([]);
    }
    return this.http.get<Dress[]>(`api/dresses/?name=${term}`).pipe(
      tap(_ => this.log(`found dresses matching "${term}"`)),
      catchError(this.handleError<Dress[]>('searchDresses', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new dress to the server */
  addDress (dress: Dress): Observable<Dress> {
    return this.http.post<Dress>(this.dressesUrl, dress, httpOptions).pipe(
      tap((dress: Dress) => this.log(`added dress w/ id=${dress.id}`)),
      catchError(this.handleError<Dress>('addDress'))
    );
  }

  /** DELETE: delete the dress from the server */
  deleteDress (dress: Dress | number): Observable<Dress> {
    const id = typeof dress === 'number' ? dress : dress.id;
    const url = `${this.dressesUrl}/${id}`;

    return this.http.delete<Dress>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted dress id=${id}`)),
      catchError(this.handleError<Dress>('deleteDress'))
    );
  }

  /** PUT: update the dress on the server */
  updateDress (dress: Dress): Observable<any> {
    return this.http.put(this.dressesUrl, dress, httpOptions).pipe(
      tap(_ => this.log(`updated dress id=${dress.id}`)),
      catchError(this.handleError<any>('updateDress'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a DressService message with the MessageService */
  private log(message: string) {
    this.messageService.add('DressService: ' + message);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/