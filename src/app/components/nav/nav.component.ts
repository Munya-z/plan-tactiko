import { ModalsService } from './../../services/modals.service';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  @ViewChild('sideNav') sideNav: ElementRef | undefined;

  openpage = signal('');

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.openpage.set(event.url.slice(1));
      }
    });
  }

  toggleNav() {
    this.sideNav?.nativeElement.classList.toggle('visible');
  }
}
