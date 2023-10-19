import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectTitle} from "../../store/title/title.selectors";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerTitle$?: Observable<string | undefined>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.footerTitle$ = this.store.select(selectTitle);
  }
}
