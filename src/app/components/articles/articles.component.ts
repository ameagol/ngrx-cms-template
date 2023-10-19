import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectTitle} from "../../store/title/title.selectors";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  storeTitle$?: Observable<string | undefined>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.storeTitle$ = this.store.select(selectTitle);
  }
}
