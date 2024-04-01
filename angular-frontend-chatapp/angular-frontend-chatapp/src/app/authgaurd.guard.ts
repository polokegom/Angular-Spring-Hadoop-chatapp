import { CanActivateFn, Router } from '@angular/router';
import { LocalstoreService } from './localstore.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const authgaurdGuard: CanActivateFn = (route, state) => {
  let isValid: boolean = inject(LocalstoreService).getSignInStatus();
  if (!isValid)
    inject(Router).navigate([''])

    return isValid;
};
