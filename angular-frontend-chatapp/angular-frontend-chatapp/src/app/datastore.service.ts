import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  constructor() { }
  export const login = createAction('[Auth Login]');
}
