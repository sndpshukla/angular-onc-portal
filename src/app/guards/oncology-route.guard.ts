import { CanActivateFn } from '@angular/router';

export const oncologyRouteGuard: CanActivateFn = () => {
  const user = JSON.parse(sessionStorage.getItem('user') || '{}');
  return user.role === 'admin';
};
