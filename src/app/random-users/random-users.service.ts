import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomUserResponse, Result } from './random-models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {
  constructor(private httpClient: HttpClient) { }

  getRandomUsers(): Observable<RandomUserResponse> {
    return this.httpClient.get<RandomUserResponse>
    ("https://randomuser.me/api?results=50");
  }

  getBetterRandomUsers(gender: string): Observable<Result[]> {
    return this.httpClient.get<RandomUserResponse>
    ("https://randomuser.me/api?results=50")
         .pipe(
            map(r => r.results
                      .filter(p => p.gender === gender))
        );
  }
}
