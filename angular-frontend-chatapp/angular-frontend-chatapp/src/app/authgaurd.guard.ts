import { CanActivateFn } from '@angular/router';
import { LocalstoreService } from './localstore.service';

export const authgaurdGuard: CanActivateFn = (route, state) => {
  return true;//LocalstoreService.getSignInStatus();
};
