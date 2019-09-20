import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingSpinnerOverlayComponent } from '../../component/common/loading-spinner/loading-spinner-overlay.component';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private overlayRef: OverlayRef = null;

  constructor(private overlay: Overlay) {}

  public show(message = '') {
    // Returns an OverlayRef (which is a PortalHost)

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    // Create ComponentPortal that can be attached to a PortalHost
    const spinnerOverlayPortal = new ComponentPortal(LoadingSpinnerOverlayComponent);
    const component = this.overlayRef.attach(spinnerOverlayPortal); // Attach ComponentPortal to PortalHost
  }

  public hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
