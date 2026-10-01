import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-producto',
  styleUrl: './producto.css',
  templateUrl: './producto.html',
})
export class Producto {
  company = input<string>()
  name = input<string>()
  price = input<number>()
  img = input<string>()

  discount = input<{
    mount: number,
    percent: number
  } | undefined>(undefined)
}
