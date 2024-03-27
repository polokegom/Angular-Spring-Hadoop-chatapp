import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LocalstoreService } from '../localstore.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private local_store: LocalstoreService) {

  }
  ngOnInit(): void {
    this.local_store.isOnContactPage = false;
  }
  
}
