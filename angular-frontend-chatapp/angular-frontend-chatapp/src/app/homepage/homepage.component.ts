import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LocalstoreService } from '../localstore.service';

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
