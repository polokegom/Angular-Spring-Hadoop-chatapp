import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Router } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
@Injectable({
  providedIn: 'root'
})
export class OverlayServiceService {

  constructor(private overlay: Overlay) { }

  openOverlay(html_content: any) {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  
    const portal = new ComponentPortal(html_content);
    overlayRef.attach(portal);
  
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }
}
