import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {setTitle} from "../../store/title/title.actions";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private router: Router, private store: Store) {}

  navigateTo(route: string, title: string) {
    this.store.dispatch(setTitle(title));
  }
}
