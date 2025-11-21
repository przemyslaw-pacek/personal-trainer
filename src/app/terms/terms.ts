import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terms',
  imports: [],
  templateUrl: './terms.html',
  styleUrl: './terms.css',
})
export class Terms implements OnInit {
  pageType: 'terms' | 'privacy' = 'terms';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const url = this.route.snapshot.routeConfig?.path;

    if (url === 'polityka-prywatnosci') {
      this.pageType = 'privacy';
    } else {
      this.pageType = 'terms';
    }
  }
}
