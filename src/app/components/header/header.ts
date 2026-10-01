import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  links = [
    {
      label: "Inicio",
      href: "/"
    }, {
      label: "Nosotros",
      href: "/nosotros"
    }
  ]
}
