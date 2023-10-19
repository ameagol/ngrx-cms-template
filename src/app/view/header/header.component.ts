import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectTitle } from "../../store/title/title.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerTitle$?: Observable<string | undefined>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.headerTitle$ = this.store.select(selectTitle);
  }
}
