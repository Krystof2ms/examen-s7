import { Component } from '@angular/core';
import { Producto } from '../../components/producto/producto';

@Component({
  imports: [Producto],
  selector: 'app-root',
  styleUrl: './root.css',
  templateUrl: './root.html',
})
export class Root {
  products = [
    {
      name: "iPhone 18 Pro Max",
      company: "Apple",
      img: "productos/iPhone.png",
      price: 7299
    },
    {
      name: "Smartband Xiaomi Band",
      company: "Xiaomi",
      img: "https://coolboxpe.vtexassets.com/arquivos/ids/529662-300-300?v=639072084321630000&width=300&height=300&aspect=true",
      price: 129
    },
    {
      name: "Kit Starlink Mini internet",
      company: "Xiaomi",
      img: "productos/smartband-xiaomi-9.webp",
      price: 120
    }
  ]
}
