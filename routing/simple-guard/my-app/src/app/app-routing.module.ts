import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

export const guard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  // some auth logic
  return false;
}

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [guard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }