import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 searchForm: FormGroup;
  constructor() { }

  ngOnInit() {
    //this.searchForm = new FormGroup();
  }

}
