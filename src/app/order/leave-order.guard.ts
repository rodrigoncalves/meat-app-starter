
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(component: OrderComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): boolean {
    if (!component.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?');
    }
    return true;
  }

}
