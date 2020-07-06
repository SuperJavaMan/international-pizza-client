export class Pizza {
  id: number;
  name: string;
  size: string;
  price: number;
  icon: string;

  constructor(id: number, name: string, size: string, price: number, icon: string) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.price = price;
    this.icon = icon;
  }
}
