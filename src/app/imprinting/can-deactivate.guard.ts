import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ImprintingComponent } from './containers/imprinting.component';

@Injectable({ providedIn: 'root' })
export class CanDeactivateGuard implements CanDeactivate<ImprintingComponent> {
  canDeactivate(
    component: ImprintingComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (!component.isLoading) {
      return true;
    }
    return window.confirm(
      '다른 페이지로 이동하면 진행중인 계산이 취소됩니다. 정말 이동하시겠습니까?'
    );
  }
}
