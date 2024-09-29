import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ExampleComponent } from '../example/example.component';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-dialogexample',
  templateUrl: './dialogexample.component.html',
  styleUrls: ['./dialogexample.component.css']
})
export class DialogexampleComponent {

  constructor(public dialog: MatDialog,private overlay: Overlay){

  }
/*
  openDialog() {

    const overlayRef = this.overlay.create(this.getOverlayConfig());

    const dialogPortal = new ComponentPortal(ExampleComponent);
    overlayRef.attach(dialogPortal);
  } */

  openDialog() {
    const dialogRef = this.dialog.open(ExampleComponent,{

      position: {
        top: '50px',
        left: '250px',
      },

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      positionStrategy
    });

    return overlayConfig;
  }
}
